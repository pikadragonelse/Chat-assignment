export type User = {
  id: string;
  username: string;
  online: boolean;
};

export type OnlineUsers = User[];

export type ChatMessage = {
  id: string;
  sender: User;
  receiver: User;
  message: string;
  timestamp: number;
};

export type ChatHistory = ChatMessage[];

export type FormattedChatMessage = {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: string;
  isSender: boolean;
};

export type FormattedChatHistory = FormattedChatMessage[];

export type TypingStatus = {
  userId: string;
  username: string;
  receiverId: string;
  isTyping: boolean;
};
