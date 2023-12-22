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
import sanitizeRoomResponse from '@/app/util/sanitizeRoomResponse';
import parseError from '@/app/util/parseError';

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
    const errorMessage: Message = parseError(error, null);
    return Response.json(errorMessage, {
      status: 500,
    });
  }
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
          success: false,
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
    const errorMessage: Message = parseError(error, null);
    return Response.json(errorMessage, {
      status: 500,
    });
  }
}
