import { env } from '@/env.mjs';
import sdk from 'node-appwrite';


const client: sdk.Client = new sdk.Client();
const databases: sdk.Databases = new sdk.Databases(client);

client.setEndpoint(env.APPWRITE_API_ENPOINT)
  .setProject(env.APPWRITE_PROJECT_ID)
  .setKey(env.APPWRITE_API_KEY);

export default databases;