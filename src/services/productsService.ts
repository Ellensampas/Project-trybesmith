import { IProducts } from '../interfaces';
import modelProducts from '../models/productsModel';

const addProducts = async (name: string, amount: string): Promise<IProducts> => {
  const add = await modelProducts.addProducts(name, amount);
  const obj = {
    id: add,
    name, 
    amount,
  };
  return obj;
};

const getProducts = async (): Promise<IProducts[]> => {
  const infos = await modelProducts.listAllProducts();
  return infos;
};

export default { addProducts, getProducts };