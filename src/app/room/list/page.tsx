'use client';

import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { DifficultyLevel, Room } from '@/types/Room';
import Link from 'next/link';

function Loading() {
  return <div role='status' className='max-w-sm animate-pulse'>
    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-48 mb-4'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[330px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[300px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px]'></div>
    <span className='sr-only'>Loading...</span>
  </div>;
}

function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);

  const [message, setMessage] = useState<string>();

  const [status, setStatus] = useState<string>();

  const getRooms = async function() {
    const response = await axios.get('/api/room');
    const data = response.data;
    setStatus(data.success);
    setMessage(data.message);
    setRooms(data.rooms);
  };

  useEffect(function() {
    getRooms();
  }, []);

  function convertToEnum(room_difficultyLevel: DifficultyLevel): import("react").ReactNode {
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

  return <div>
    <p className={status ? '' : 'text-red-500'}>{message}</p>
    <hr />
    {status && rooms && rooms.map(function (room: Room) {
      return <div key={room.room_id}>
        <Link href={'/'}>Room Name: {room.room_name}</Link>
        <br />
      </div>
    })}
  </div>
};

export default function listRooms(): JSX.Element {
  return <>
    <h1>List Room</h1>
    <Suspense fallback={<Loading />}>
      <Rooms />
    </Suspense>
  </>;
}