import jwt, { SignOptions, Secret } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'vilapedrinhas123';

const configJwt: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tok = (payload: object | string | number) => {
  const tk = jwt.sign({ payload }, secret, configJwt);
  return tk;
};

export default tok;