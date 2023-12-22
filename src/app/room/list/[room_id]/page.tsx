import { Loading } from '@/app/util/Loading';
import Puzzle from '@/components/custom-ui/puzzle';
import getRoomById from '@/app/action';
import { Room } from '@/types/Room';

export default async function RoomDetails({ params }: { params: any }) {
  'use server';

  const resp = await getRoomById(params.room_id);
  const room: Room = resp.room as Room;
  const status = resp?.message?.code === 200;
  const message = resp?.message?.message;

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
                <p>Room Difficulty: {room.room_difficultyLevel}</p>
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
