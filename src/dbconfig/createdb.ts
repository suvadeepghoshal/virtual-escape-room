import databases from '@/dbconfig/dbconfig';
import { Models } from 'node-appwrite';


/**
 * DB is created from app write website as of dev
 * If someone wants to create a DB from the code, please use TS to JS parser to run this file
 * The respective parser is not added in the package.json of this project
 * @Author Suvadeep Ghoshal
 * */
databases.create('escape-room', 'virtual-escape-room')
  .then((r: Models.Database) => console.log(r),
    e => console.error(e));