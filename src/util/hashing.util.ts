import * as bcrypt from 'bcrypt';

export const hashForMe = async (password: string) => {
  return bcrypt.hash(password, 10);
};

export const compareForMe = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
