import { Account, Client } from 'appwrite';
import { env } from './env.mjs';

export const client: Client = new Client();

client
  .setEndpoint(env.APPWRITE_API_ENPOINT)
  .setProject(env.APPWRITE_PROJECT_ID);

export const account: Account = new Account(client);
export { ID } from 'appwrite';
