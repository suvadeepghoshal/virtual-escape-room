'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  buttonText,
}: {
  buttonText: string;
}): JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button
      className='w-full bg-indigo-600 text-white py-2 rounded-md'
      type={'submit'}
      aria-disabled={pending}
    >
      {pending ? 'Submitting...' : buttonText}
    </Button>
  );
}
