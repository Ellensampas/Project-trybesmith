import { NextFunction, Request, Response } from 'express';

export default (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) return next({ status: 400, message: '"username" is required' });
  if (!password) return next({ status: 400, message: '"password" is required' });
  
  return next();
};