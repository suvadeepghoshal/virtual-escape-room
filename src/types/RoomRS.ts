import { Models } from 'node-appwrite';
import { Puzzle } from './Puzzle';

type AppwriteDocument = Models.Document;

type CustomRoomProperties = {
  room_id: string;
  room_name: string;
  room_description: string;
  room_difficultyLevel: number;
  room_maxTimeLimit: number;
  puzzles?: Puzzle[];
};
export type RoomRS = AppwriteDocument & CustomRoomProperties;
