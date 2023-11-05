import { Request } from 'next/dist/compiled/@edge-runtime/primitives';

export function GET(request: Request) {
  return Response.json('You have successfully entered inside me', {
    status: 200,
  });
}