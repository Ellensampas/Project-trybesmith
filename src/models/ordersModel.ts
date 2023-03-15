import { IOrders } from '../interfaces';
import connection from './connection';

const listAllOrders = async (): Promise<IOrders[]> => {
  const [inf] = await connection.execute(`
  SELECT O.id, O.user_id AS userId, json_arrayagg(P.id) AS productsIds
  FROM Trybesmith.orders AS O
  INNER JOIN Trybesmith.products AS P 
  ON O.id = P.order_id
  GROUP BY O.id`);
  return inf as IOrders[];
};

export default { listAllOrders };