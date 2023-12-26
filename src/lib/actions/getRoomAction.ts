'use server';

import databases from '@/dbconfig/dbconfig';
import { env } from '@/env.mjs';
import sanitizeRoomResponse from '@/app/util/sanitizeRoomResponse';
import { RoomRS } from '@/types/RoomRS';
import parseError from '@/app/util/parseError';
import { CommonResponse } from '@/types/CommonResponse';
import { Category } from '@/types/Message';
import { Room } from '@/types/Room';

export default async function getRoomById(
  roomID: string
): Promise<CommonResponse> {
  try {
    const response = await databases.getDocument(
      env.APPWRITE_DB_ID,
      env.APPWRITE_COLLECTION_ID,
      roomID
    );

    if (!response) {
      return {
        message: {
          code: 200,
          message: 'No rooms are available',
          category: Category.ERROR,
        },
        status: 200,
      };
    }

    return {
      message: {
        code: 200,
        message: 'Room is successfully fetched!',
        category: Category.INFO,
      },
      room: sanitizeRoomResponse(new Array(response) as RoomRS[]) as Room,
      status: 200,
    };
  } catch (e: any) {
    return { message: parseError(e, 'Error while fetching room') };
  }
}
