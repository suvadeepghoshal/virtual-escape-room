'use server';

import { z } from 'zod';
import parseError from '@/app/util/parseError';
import databases from '@/dbconfig/dbconfig';
import { env } from '@/env.mjs';
import { ID } from '@/app/appwrite';

const puzzleSchema = z.object({
  puzzle_name: z.string().trim().min(3).max(100),
  qna: z.array(
    z.object({
      question: z.string().trim().min(3).max(100),
      answer: z.string().trim().min(3).max(100),
      options: z.array(z.nullable(z.string().trim().max(100))),
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
    if (puzzle) {
      const response = await databases.createDocument(
        env.APPWRITE_DB_ID,
        env.APPWRITE_COLLECTION_ID,
        ID.unique(),
        puzzle
      );
      console.log(response);
    }
  } catch (e: any) {
    console.error(e);
    return { message: parseError(e, null) };
  }
}
