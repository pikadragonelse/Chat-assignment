import { User } from './user';

export interface Message {
  id: string;
  sender: User;
  receiver: User;
  message: string;
  timestamp: number;
}

export type PayloadSendMessage = {
  message: string;
  receiver: User;
  sender: User;
};
