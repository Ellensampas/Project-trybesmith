import { IUsers } from '../interfaces';
import userModel from '../models/usersModel';

const addUsers = async (username: IUsers, vocation: IUsers, level: IUsers, password: IUsers)
: Promise<number> => {
  const add = await userModel.addUsers(username, vocation, level, password);
  return add as number;
};

export default { addUsers };