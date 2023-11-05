'use client';

import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';

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

const Rooms = () => {
  const [rooms, setRooms] = useState();

  const getRooms = async () => {
    const response = await axios.get('/api/room/list');
    const data = response.data;
    if (data.length) setRooms(data);
  };

  useEffect(function() {
    getRooms();
  }, []);

  return <>{rooms}</>;
};

export default function listRooms(): JSX.Element {
  return <>
    <h1>List Room</h1>
    <Suspense fallback={<Loading />}>
      <Rooms />
    </Suspense>
  </>;
}