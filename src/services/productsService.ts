// import { Iproducts } from '../interfaces';
import modelProducts from '../models/productsModel';

const addProducts = async (name: string, amount: string): Promise<number> => {
  const add = await modelProducts.addProducts(name, amount);
  return add;
};

export default { addProducts };