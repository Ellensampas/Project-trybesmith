import { Request, Response } from 'express';
// import { Iproducts } from '../interfaces';
import serviceProducts from '../services/productsService';

const addProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const add = await serviceProducts.addProducts(name, amount);
  return res.status(201).json(add);
};

export default { addProducts };