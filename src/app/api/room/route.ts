import databases from '@/dbconfig/dbconfig';
import { ID } from '@/app/appwrite';
import { env } from '@/env.mjs';
import { Room } from '@/types/Room';
import { v4 as uuidv4 } from 'uuid';
import { Query } from 'appwrite';
import { Models } from 'node-appwrite';
import { RoomRS } from '@/types/RoomRS';
import { Category, Message } from '@/types/Message';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  function parseCreateRoomRQ(body: Room) {
    return {
      room_id: uuidv4(),
      room_name: body.room_name,
      room_description: body.room_description,
      room_difficultyLevel: body.room_difficultyLevel,
      room_maxTimeLimit: body.room_maxTimeLimit,
    };
  }

  const reqObj = parseCreateRoomRQ(body);
  try {
    const existingRoomData: Models.DocumentList<RoomRS> =
      await databases.listDocuments(
        env.APPWRITE_DB_ID,
        env.APPWRITE_COLLECTION_ID,
        [Query.equal('room_name', body?.room_name)]
      );

    if (existingRoomData.total)
      return Response.json({
        message: `Room called ${existingRoomData.documents[0].room_name} already exists!`,
        category: Category.ERROR,
      });

    const response = await databases.createDocument(
      env.APPWRITE_DB_ID,
      env.APPWRITE_COLLECTION_ID,
      ID.unique(),
      reqObj
    );

    if (response?.$id)
      return Response.json(
        {
          message: 'Room is successfully created!',
          category: Category.INFO,
        },
        { status: 200 }
      );
  } catch (error: any) {
    const errorMessage: Message = {
      code: error.code,
      message: error.message,
      category: Category.ERROR,
    };
    return Response.json(errorMessage, {
      status: 500,
    });
  }
}

function sanitizeRoomResponse(rooms: RoomRS[]): Room[] | Room {
  let sanitizedRoom: Room | Room[] = [];
  if (rooms.length === 1) {
    sanitizedRoom = {
      room_id: rooms[0].$id,
      room_name: rooms[0].room_name,
      room_description: rooms[0].room_description,
      room_difficultyLevel: rooms[0].room_difficultyLevel,
      room_maxTimeLimit: rooms[0].room_maxTimeLimit,
      puzzles:
        rooms[0].puzzles && rooms[0].puzzles.length ? rooms[0].puzzles : [],
    };
  } else {
    sanitizedRoom = rooms.map((room) => {
      return {
        room_id: room.$id,
        room_name: room.room_name,
        room_description: room.room_description,
        room_difficultyLevel: room.room_difficultyLevel,
        room_maxTimeLimit: room.room_maxTimeLimit,
        puzzles: room.puzzles && room.puzzles.length ? room.puzzles : [],
      };
    });
  }
  return sanitizedRoom;
}

export async function GET(request: NextRequest) {
  const roomID = request.nextUrl.searchParams.get('id');

  async function getRoomByID(roomID: string) {
    const response = await databases.getDocument(
      env.APPWRITE_DB_ID,
      env.APPWRITE_COLLECTION_ID,
      roomID
    );

    if (!response) {
      return NextResponse.json(
        {
          message: 'No rooms are available',
          sucess: false,
        },
        {
          status: 200,
        }
      );
    }

    return {
      message: 'Room is successfully fetched!',
      room: sanitizeRoomResponse(new Array(response) as RoomRS[]),
      success: true,
    };
  }

  async function getRooms() {
    const response = await databases.listDocuments(
      env.APPWRITE_DB_ID,
      env.APPWRITE_COLLECTION_ID,
      [Query.select(['room_name', '$id'])]
    );

    if (response?.total === 0)
      return NextResponse.json(
        {
          message: 'No rooms are available',
          sucess: false,
        },
        {
          status: 200,
        }
      );

    return {
      message: 'Rooms are successfully fetched!',
      rooms: sanitizeRoomResponse(response.documents as RoomRS[]),
      success: true,
    };
  }

  try {
    let response;

    if (roomID) response = getRoomByID(roomID);
    else response = getRooms();

    return NextResponse.json(await response, {
      status: 200,
    });
  } catch (error: any) {
    const errorMessage: Message = {
      code: error.code,
      message: error.message,
      category: Category.ERROR,
    };
    return Response.json(errorMessage, {
      status: 500,
    });
  }
}
