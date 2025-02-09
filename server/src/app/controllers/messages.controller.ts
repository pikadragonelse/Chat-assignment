import { Request, Response } from 'express';
import { MessagesService } from '../services/messages.service';

export const handleSendMessage = (req: Request, res: Response) => {
  const { user, message } = req.body;
  if (!user || !message) return res.status(400).json({ error: 'Invalid request' });

  return res.json(MessagesService.sendMessage(user, message));
};

export const handleGetChatHistory = (_: Request, res: Response) =>
  res.json(MessagesService.getChatHistory());

export const handleGetUnreadMessages = (req: Request, res: Response) =>
  res.json(MessagesService.getUnreadMessages(req.params.userId));

export const handleDeleteMessage = (req: Request, res: Response) =>
  res.json(MessagesService.deleteMessage(req.params.messageId));
