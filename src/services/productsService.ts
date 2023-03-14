import { Iproducts } from '../interfaces';
import modelProducts from '../models/productsModel';

const addProducts = async (name: string, amount: string): Promise<Iproducts> => {
  const add = await modelProducts.addProducts(name, amount);
  const obj = {
    id: add,
    name, 
    amount,
  };
  return obj;
};

const getProducts = async (): Promise<Iproducts[]> => {
  const infos = await modelProducts.listAllProducts();
  return infos;
};

export default { addProducts, getProducts };