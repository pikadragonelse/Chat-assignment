import { User } from '@nx-chat-assignment/shared-models';
import { Server, Socket } from 'socket.io';
import { MessagesService } from '../services/messages.service';
import { UsersService } from '../services/users.service';

const userSockets: Record<string, string> = {};

export const ChatSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`✅ User connected: ${socket.id}`);

    socket.on('user:login', (user: User) => {
      socket.data.user = user;
      userSockets[user.id] = socket.id;
      io.emit('usersOnline', { event: 'usersOnline', data: UsersService.getOnlineUsers() });
    });

    socket.on('message:send', ({ receiver, message, sender }) => {
      if (!sender) {
        socket.emit('error', { event: 'message:send', message: 'User not logged in' });
        return;
      }

      if (!receiver || !receiver.id) {
        socket.emit('error', { event: 'message:send', message: 'Receiver is required' });
        return;
      }

      const receiverUser = UsersService.getOnlineUsers().find(
        (user: User) => user.id === receiver.id,
      );
      if (!receiverUser) {
        socket.emit('error', { event: 'message:send', message: 'Receiver not found' });
        return;
      }

      const chatMessage = MessagesService.sendMessage(sender, receiverUser, message);

      socket.emit('message:receive', { event: 'message:receive', data: chatMessage });

      const receiverSocketId = userSockets[receiver.id];
      console.log(receiverSocketId);

      if (receiverSocketId) {
        io.to(receiverSocketId).emit('message:receive', {
          event: 'message:receive' + receiver.username,
          data: chatMessage,
        });
      }
    });

    socket.on('user:logout', (user: User) => {
      delete userSockets[user.id];
      io.emit('usersOnline', { event: 'usersOnline', data: UsersService.getOnlineUsers() });
    });
  });
};
