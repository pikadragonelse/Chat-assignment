import { ChatRepository } from '../repositories/chat.repository';

export const UsersService = {
  getUsersOnline: () => ChatRepository.getUsersOnline(),
};
