import { User } from '@nx-chat-assignment/shared-models';
import { v4 as uuidv4 } from 'uuid';
import { ChatRepository } from '../repositories/chat.repository';

export const AuthService = {
  login: (username: string): User => {
    let user = ChatRepository.getUsersOnline().find((u) => u.username === username);

    if (!user) {
      user = { id: uuidv4(), username, online: true };
      ChatRepository.addUser(user);
    } else {
      user.online = true;
    }

    return user;
  },

  logout: (userId: string) => {
    const user = ChatRepository.getUsersOnline().find((u) => u.id === userId);
    if (user) user.online = false;
    return ChatRepository.getUsersOnline();
  },

  getUserByUsername: (username: string): User | undefined => {
    return ChatRepository.getUsersOnline().find((u) => u.username === username);
  },

  getUsersOnline: () => ChatRepository.getUsersOnline(),
};
