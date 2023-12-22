import { Room } from '@/types/Room';
import { Message } from '@/types/Message';

export type CommonResponse = {
  room?: Room;
  rooms?: Room[];
  message?: Message;
  status?: number;
};
