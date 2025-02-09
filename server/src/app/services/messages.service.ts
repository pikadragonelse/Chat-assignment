import { ChatMessage, User } from '@nx-chat-assignment/shared-models';
import { ChatRepository } from '../repositories/chat.repository';

export const MessagesService = {
  sendMessage: (user: User, message: string): ChatMessage =>
    ChatRepository.addMessage(user, message),

  getChatHistory: () => ChatRepository.getHistory(),

  getUnreadMessages: (userId: string) => ChatRepository.getUnreadMessages(userId),

  deleteMessage: (messageId: string) => ChatRepository.deleteMessage(messageId),
};
