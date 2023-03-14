import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Iproducts } from '../interfaces';
import connection from './connection';

const addProducts = async (name: string, amount: string): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [name, amount]);
  return insertId as number;
};

const listAllProducts = async (): Promise<Iproducts[]> => {
  const [infos] = await connection.execute<RowDataPacket[] & Iproducts[]>(`
    SELECT * FROM Trybesmith.products
  `);
  return infos;
};

export default { addProducts, listAllProducts };