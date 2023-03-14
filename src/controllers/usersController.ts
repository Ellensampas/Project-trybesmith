import { Request, Response } from 'express';
import usersService from '../services/usersService';
import tok from '../auth/tokenCreate';

const addUsers = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const add = await usersService.addUsers(username, vocation, level, password);
  const obj = { id: add, username, vocation, level, password };
  const tk = tok(obj);
  return res.status(201).json({ token: tk });
};

export default { addUsers };
