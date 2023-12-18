'use client';

import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';

export default function Option({ max }: { max: number }): JSX.Element {
  const [options, setOptions] = useState<number[]>([]);

  function handleOptionClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (options.length === max) return;
    setOptions(
      options.length === 0
        ? [options.length + 1]
        : [...options, options.length + 1]
    );
  }

  return (
    <div>
      {options.length === 0 ? (
        <Button
          className='bg-indigo-600 text-white rounded-md'
          onClick={handleOptionClick}
        >
          Add an Option
        </Button>
      ) : (
        <>
          {options.map((option) => {
            return (
              <div className='flex space-x-2 mb-1' key={option}>
                <Input
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                  id='option'
                  placeholder={`Enter option ${option}`}
                />
                <Button
                  className='bg-indigo-600 text-white rounded-md'
                  onClick={handleOptionClick}
                >
                  +
                </Button>
              </div>
            );
          })}
        </>
      )}
      {options.length === max && (
        <p className='text-red-500'>Max options allowed are {max}</p>
      )}
    </div>
  );
}
