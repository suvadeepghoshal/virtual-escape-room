import { Room } from '@/types/Room';

export type Puzzle = {
  id: number;
  name: string;
  clue: string;
  answer: string;
  roomId: number;
  room: Room;
}