import { ILogin } from '../interfaces';
import modelLogin from '../models/loginModel';

const logs = async ({ username, password }: ILogin) => {
  const infs = await modelLogin.log(username, password);
  if (!infs) {
    return { message: 'Username or password invalid' };
  }
  return infs;
};

export default { logs };