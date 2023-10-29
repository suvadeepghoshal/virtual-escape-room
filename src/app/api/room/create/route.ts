// databases.createDocument(
//   env.APPWRITE_DB_ID,
//   env.APPWRITE_COLLECTION_ID,
//   ID.unique(),
//   {})
//   .then(
//     r => console.log(`document successfully created: ${JSON.stringify(r)}`),
//     e => console.error(`document not created: ${JSON.stringify(e)}`),
//   );

import { NextApiRequest, NextApiResponse } from 'next';

export function POST(req: NextApiRequest, res: NextApiResponse) {
  return Response.json({
    name: 'Suvadeep',
  });
}
