export type User = {
  id: string;
  username: string;
  online: boolean;
};

export type OnlineUsers = User[];

export type ChatMessage = {
  id: string;
  user: User;
  message: string;
  timestamp: number;
};

export type ChatHistory = ChatMessage[];

export type TypingStatus = {
  userId: string;
  username: string;
  isTyping: boolean;
};

export type UnreadMessage = {
  chatId: string;
  lastMessage: ChatMessage;
  unreadCount: number;
};
