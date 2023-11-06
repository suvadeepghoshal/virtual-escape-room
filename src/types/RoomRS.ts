import { Models } from 'node-appwrite';

type AppwriteDocument = Models.Document;

type CustomRoomProperties = {
  room_id: string;
  room_name: string;
  room_description: string;
  room_difficultyLevel: number;
  room_maxTimeLimit: number;
};
export type RoomRS = AppwriteDocument & CustomRoomProperties;