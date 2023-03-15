import { Request, Response } from 'express';
import serviceOrders from '../services/ordersService';

const getOrders = async (_req: Request, res: Response) => {
  const inf = await serviceOrders.getAll();
  return res.status(200).json(inf);
};

export default { getOrders };