import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces';
import connection from './connection';

const addUsers = async (username: IUsers, vocation: IUsers, level: IUsers, password: IUsers)
: Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)
  `, [username, vocation, level, password]);
  return insertId as number;
};

export default { addUsers };