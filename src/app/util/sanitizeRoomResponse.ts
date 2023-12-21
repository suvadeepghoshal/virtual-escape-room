import { RoomRS } from '@/types/RoomRS';
import { Room } from '@/types/Room';

const sanitizeRoomResponse = (rooms: RoomRS[]): Room[] | Room => {
  let sanitizedRoom: Room | Room[];
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
};
export default sanitizeRoomResponse;
