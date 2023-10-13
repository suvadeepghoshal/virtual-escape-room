'use client';

import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Room } from '@/types/Room';

export default function CreateRoom() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Room>();

  const onSubmit: SubmitHandler<Room> = (data) => console.log(data);

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-gray-200'>Create Room</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400'>
            Fill in the details to create an escape room
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label htmlFor='text'
                     className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200'>
                Room Name
              </label>
              <div className='mt-2'>
                <input
                  id='name'
                  {...register('name', { required: 'Title of the room is required' })}
                  type='text'
                  autoComplete='room-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.name && <p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.name.message}</p>}
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='description'
                     className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200'>
                Room Description
              </label>
              <div className='mt-2'>
                <textarea
                  id='description'
                  {...register('description')}
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
              <p className='mt-3 text-sm leading-6 text-gray-600'>Describe the room</p>
            </div>

          </div>
        </div>

        <div className='border-b border-gray-900/10 dark:border-gray-200/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-gray-200'>Other required
            information about the room</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>Keep the time in seconds</p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>

            <div className='sm:col-span-3'>
              <label htmlFor='difficultyLevel'
                     className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200'>
                Room Difficulty
              </label>
              <div className='mt-2'>
                <select
                  id='difficultyLevel'
                  {...register('difficultyLevel')}
                  autoComplete='difficulty-level'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:max-w-xs sm:text-sm sm:leading-6'
                >
                  <option value='0'>Easy</option>
                  <option value='1'>Medium</option>
                  <option value='2'>Difficult</option>
                </select>
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label htmlFor='maxTimeLimit'
                     className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200'>
                Time Limit To Solve
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('maxTimeLimit', { required: 'Solve time can not be 0 seconds' })}
                  id='maxTimeLimit'
                  autoComplete='max-time'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.maxTimeLimit &&
                  <p className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.maxTimeLimit.message}</p>}
              </div>
            </div>

          </div>
        </div>

        <div className='border-b border-gray-900/10 dark:border-gray-200/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-gray-200'>Notifications</h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Great start, Creator! 🚀 You&apos;re about to craft an unforgettable adventure. The escape room
            you&apos;re creating will transport players to a world of intrigue and challenge. Remember,
            every
            puzzle you design adds a layer of excitement. Describe the room with vivid detail, and let your
            creativity soar! Happy crafting!
          </p>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <Link className='text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:underline'
              href={'/'}>
          Cancel
        </Link>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  </div>;
}