import { Request, Response } from 'express';
import loginService from '../services/loginService';
import tok from '../auth/tokenCreate';

const logs = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const toki = await loginService.logs({ username, password });

  const tk = tok(toki);
  res.status(200).json({ token: tk });
};

export default { logs };