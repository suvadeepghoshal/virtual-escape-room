'use server';

import databases from '@/dbconfig/dbconfig';
import { env } from '@/env.mjs';

import { RoomRS } from '@/types/RoomRS';
import sanitizeRoomResponse from '@/app/util/sanitizeRoomResponse';

export default async function getRoomById(roomID: string) {
  const response = await databases.getDocument(
    env.APPWRITE_DB_ID,
    env.APPWRITE_COLLECTION_ID,
    roomID
  );

  if (!response) {
    return {
      message: 'No rooms are available',
      success: false,
      status: 200,
    };
  }

  return {
    message: 'Room is successfully fetched!',
    room: sanitizeRoomResponse(new Array(response) as RoomRS[]),
    success: true,
    status: 200,
  };
}
