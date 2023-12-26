'use server';

import { z } from 'zod';
import parseError from '@/app/util/parseError';

const puzzleSchema = z.object({
  puzzle_name: z.string().min(3).max(100),
  qna: z.array(
    z.object({
      question: z.string().min(3).max(100),
      answer: z.string().min(3).max(100),
      options: z.array(z.nullable(z.string().max(100))),
    })
  ),
});

export default async function createPuzzle(formData: FormData) {
  try {
    console.log('inside createPuzzleAction.ts :: createPuzzle()');
    const reqObj = {
      puzzle_name: formData.get('puzzle-name'),
      qna: [
        {
          question: formData.get('puzzle-question'),
          answer: formData.get('correct-answer'),
          options: [
            formData.get('option-1'),
            formData.get('option-2'),
            formData.get('option-3'),
            formData.get('option-4'),
          ],
        },
      ],
    };
    const puzzle = puzzleSchema.parse(reqObj);
    console.log(
      `inside createPuzzleAction.ts :: createPuzzle() :: puzzle: ${JSON.stringify(
        puzzle
      )}`
    );
  } catch (e: any) {
    return { message: parseError(e, null) };
  }
}
