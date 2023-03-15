import ordersModel from '../models/ordersModel';

const getAll = async () => {
  const inf = await ordersModel.listAllOrders();
  return inf;
};

export default { getAll };