import { Router } from 'express';
import {
  handleSendMessage,
  handleGetChatHistory,
  handleGetUnreadMessages,
  handleDeleteMessage,
} from '../controllers/messages.controller';

const messagesRouter: Router = Router();

messagesRouter.post('/', handleSendMessage);
messagesRouter.get('/history', handleGetChatHistory);
messagesRouter.get('/unread/:userId', handleGetUnreadMessages);
messagesRouter.delete('/:messageId', handleDeleteMessage);

export default messagesRouter;
