import {
  ChatHistory,
  ChatMessage,
  OnlineUsers,
  UnreadMessage,
  User,
} from '@nx-chat-assignment/shared-models';
import { v4 as uuidv4 } from 'uuid';

let chatHistory: ChatHistory = [];
const onlineUsers: OnlineUsers = [];
const unreadMessages: Record<string, UnreadMessage[]> = {};

export const ChatRepository = {
  getHistory: (): ChatHistory => chatHistory.slice(-50),

  addMessage: (user: User, message: string) => {
    const chatMessage: ChatMessage = {
      id: uuidv4(),
      user,
      message,
      timestamp: Date.now(),
    };
    chatHistory.push(chatMessage);

    onlineUsers
      .filter((u) => u.id !== user.id && !u.online)
      .forEach((u) => {
        unreadMessages[u.id] = unreadMessages[u.id] || [];
        unreadMessages[u.id].push({ chatId: uuidv4(), lastMessage: chatMessage, unreadCount: 1 });
      });

    if (chatHistory.length > 50) chatHistory.shift();
    return chatMessage;
  },

  addUnreadMessage: (userId: string, chatMessage: ChatMessage) => {
    unreadMessages[userId] = unreadMessages[userId] || [];
    unreadMessages[userId].push({ chatId: uuidv4(), lastMessage: chatMessage, unreadCount: 1 });
  },

  clearUnreadMessages: (userId: string) => {
    delete unreadMessages[userId];
  },

  getUnreadMessages: (userId: string): UnreadMessage[] => {
    return unreadMessages[userId] || [];
  },

  deleteMessage: (messageId: string) => {
    chatHistory = chatHistory.filter((msg) => msg.id !== messageId);
    return chatHistory;
  },

  addUser: (user: User) => {
    const existingUser = onlineUsers.find((u) => u.username === user.username);
    if (!existingUser) {
      onlineUsers.push(user);
    } else {
      existingUser.online = true;
    }
    return onlineUsers;
  },

  removeUser: (userId: string) => {
    const user = onlineUsers.find((u) => u.id === userId);
    if (user) user.online = false;
    return onlineUsers;
  },

  getUsersOnline: (): OnlineUsers => onlineUsers,
};
