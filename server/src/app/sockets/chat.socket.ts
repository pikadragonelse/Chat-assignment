import { User } from '@nx-chat-assignment/shared-models';
import { Server, Socket } from 'socket.io';
import { ChatRepository } from '../repositories/chat.repository';
import { AuthService } from '../services/auth.service';
import { MessagesService } from '../services/messages.service';

export const ChatSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`✅ User connected: ${socket.id}`);

    socket.on('user:login', (username: string) => {
      const user = AuthService.login(username);

      if (!user) {
        socket.emit('error', { message: 'Username is already taken' });
        return;
      }

      socket.data.user = user;
      io.emit('usersOnline', AuthService.getUsersOnline());
      socket.emit('chatHistory', MessagesService.getChatHistory());

      const unreadMessages = ChatRepository.getUnreadMessages(user.id);
      socket.emit('unreadMessages', unreadMessages);
    });

    socket.on('message:send', (message: string) => {
      const user: User = socket.data.user;

      if (!user) {
        socket.emit('error', { message: 'User not logged in' });
        return;
      }

      const chatMessage = MessagesService.sendMessage(user, message);
      io.emit('message:receive', chatMessage);

      io.emit('notification:newMessage', { from: user.username, message });

      ChatRepository.getUsersOnline()
        .filter((u) => u.id !== user.id && !u.online)
        .forEach((u) => {
          ChatRepository.addUnreadMessage(u.id, chatMessage);
        });
    });

    socket.on('disconnect', () => {
      const user: User = socket.data.user;

      if (user) {
        AuthService.logout(user.id);
        io.emit('usersOnline', AuthService.getUsersOnline());
      }
    });

    socket.on('message:read', () => {
      const user: User = socket.data.user;
      if (user) {
        ChatRepository.clearUnreadMessages(user.id);
        socket.emit('unreadMessages', []);
      }
    });
  });
};
