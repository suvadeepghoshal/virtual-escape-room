import { Puzzle } from '@/types/Puzzle';

export type Room = {
  room_id: number;
  room_name: string;
  room_description: string;
  room_difficultyLevel: DifficultyLevel;
  room_maxTimeLimit: number;
  puzzles: Puzzle[];
}

export enum DifficultyLevel {
  easy = 0, medium = 1, hard = 2
}