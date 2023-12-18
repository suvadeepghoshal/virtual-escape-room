'use client';

import { DifficultyLevel, Room } from '@/types/Room';
import { Loading } from '@/app/util/Loading';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Puzzle from '@/components/custom-ui/puzzle';

// export const dynamic = 'force-dynamic'; // defaults to auto

export default function RoomDetails({ params }: { params: any }): JSX.Element {
  function convertToEnum(
    room_difficultyLevel: DifficultyLevel
  ): import('react').ReactNode {
    switch (room_difficultyLevel) {
      case DifficultyLevel.easy:
        return 'Easy';
      case DifficultyLevel.medium:
        return 'Medium';
      case DifficultyLevel.hard:
        return 'Hard';
      default:
        return 'Unknown';
    }
  }

  const [room, setRoom] = useState<Room>({} as Room);

  const [message, setMessage] = useState<string>();

  const [status, setStatus] = useState<string>();

  async function getRoomByID(room_id: string) {
    try {
      const response = await axios.get(`/api/room?id=${room_id}`);
      const data = await response.data;
      setStatus(data.success);
      setMessage(data.message);
      setRoom(data.room);
    } catch (_error) {
      setMessage('Unable to fetch the room details!');
    }
  }

  useEffect(
    function () {
      getRoomByID(params.room_id);
    },
    [params.room_id]
  );

  return (
    <div>
      <div>
        {message ? (
          <div>
            <p className={status ? '' : 'text-red-500'}>{message}</p>
            <hr />
            {status && room && (
              <div key={room.room_id}>
                <h1>Welcome to {room.room_name}</h1>
                <p>Room Description: {room.room_description}</p>
                <p>
                  Room Difficulty: {convertToEnum(room.room_difficultyLevel)}
                </p>
                <p>
                  Maximum time to solve the puzzles in this room:{' '}
                  {room.room_maxTimeLimit} seconds
                </p>
                <br />
                {room.puzzles && room.puzzles.length > 0 ? (
                  <div>
                    <p>Puzzles in this room:</p>
                    <ul>
                      {room.puzzles.map((puzzle) => {
                        return (
                          <li key={puzzle.id}>
                            <Puzzle mode={'view'} editable={true} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p className='text-red-500'>No Puzzles in this room</p>
                    <Puzzle mode={'create'} editable={true} />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
