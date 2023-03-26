import { IUsers } from '../interfaces';
import connection from './connection';

const log = async (username: string, password: string): Promise<IUsers[]> => {
  const [infs] = await connection.execute(`
    SELECT * FROM Trybesmith.users WHERE username = ?;
  `, [username, password]);
  return infs as IUsers[];
};

export default { log };