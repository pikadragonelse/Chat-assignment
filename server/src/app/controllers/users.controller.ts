import { Request, Response } from 'express';
import { UsersService } from '../services/users.service';

export const handleGetOnlineUsers = (_: Request, res: Response) =>
  res.json(UsersService.getUsersOnline());
