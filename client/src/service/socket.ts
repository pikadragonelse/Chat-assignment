import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4000'; // Thay bằng URL của server

let socket: Socket | null = null;
export const connectSocket: () => Socket | null = () => {
  if (!socket) {
    socket = io(SOCKET_URL, { transports: ['websocket'] });

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });
  }
  return socket;
};

export const getSocket: () => Socket | null = () => {
  if (!socket) {
    console.log('Socket is not connected yet!');
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
