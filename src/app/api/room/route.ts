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

function sanitizeRoomResponse(rooms: RoomRS[]) {
  const sanitizedRoom = rooms.map((room) => {
    return {
      room_id: room.$collectionId,
      room_name: room.room_name,
      room_description: room.room_description,
      room_difficultyLevel: room.room_difficultyLevel,
      room_maxTimeLimit: room.room_maxTimeLimit,
    };
  });
  return sanitizedRoom;
}

export async function GET(_request: NextRequest) {
  try {
    const response = await databases.listDocuments(
      env.APPWRITE_DB_ID,
      env.APPWRITE_COLLECTION_ID
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

    return NextResponse.json(
      {
        message: 'Rooms are successfully fetched!',
        rooms: sanitizeRoomResponse(response.documents as RoomRS[]),
        success: true,
      },
      {
        status: 200,
      }
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
