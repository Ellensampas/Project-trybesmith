import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProducts } from '../interfaces';
import connection from './connection';

const addProducts = async (name: string, amount: string): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
  `, [name, amount]);
  return insertId as number;
};

const listAllProducts = async (): Promise<IProducts[]> => {
  const [infos] = await connection.execute<RowDataPacket[] & IProducts[]>(`
    SELECT * FROM Trybesmith.products
  `);
  return infos;
};

export default { addProducts, listAllProducts };