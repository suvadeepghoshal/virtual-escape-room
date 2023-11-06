'use client';

import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { DifficultyLevel, Room } from '@/types/Room';

function Loading() {
  return <div role='status' className='max-w-sm animate-pulse'>
    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
    <span className='sr-only'>Loading...</span>
  </div>;
}

function Rooms() {
  const [rooms, setRooms] = useState<Room[]>();

  const [message, setMessage] = useState<string>();

  const getRooms = async function (){
    const response = await axios.get('/api/room');
    const data = response.data;
    if (data.success) {
      setMessage(data.message);
      setRooms(data.rooms);
    }
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
    <p>{message}</p>
    <hr />
    {rooms && rooms.map(function (room: Room) {
      return <div key={room.room_id}>
        <h2>Room Name: {room.room_name}</h2>
        <p>Room Description: {room.room_description}</p>
        <p>Maximum time to solve puzzle: {room.room_maxTimeLimit} seconds</p>
        <p>Room difficulty level: {convertToEnum(room.room_difficultyLevel)}</p>
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