'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Room } from '@/types/Room';

function Loading() {
  return (
    <div role='status' className='max-w-sm animate-pulse'>
      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-48 mb-4'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[330px] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[300px] mb-2.5'></div>
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px]'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}

function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);

  const [message, setMessage] = useState<string>();

  const [status, setStatus] = useState<string>();

  const getRooms = async function () {
    try {
      const response = await axios.get('/api/room');
      const data = response.data;
      setStatus(data.success);
      setMessage(data.message);
      setRooms(data.rooms);
    } catch (_error) {
      setMessage('Unable to fetch the room details!');
    }
  };

  useEffect(function () {
    getRooms();
  }, []);

  return (
    <div>
      {message ? (
        <div>
          <p className={status ? '' : 'text-red-500'}>{message}</p>
          <hr />
          {status &&
            rooms &&
            rooms.map((room: Room) => {
              return (
                <div key={room.room_id}>
                  <Link href={`list/${room.room_id}`}>
                    Room Name: {room.room_name}
                  </Link>
                  <br />
                </div>
              );
            })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default function listRooms(): JSX.Element {
  return (
    <>
      <h1>List Room</h1>
      <Rooms />
    </>
  );
}
