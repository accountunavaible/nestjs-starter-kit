import * as dotenv from 'dotenv';

dotenv.config();

export default {
  jwt: process.env.JWT_SECRETE_KEY,
  db: {
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || '',
  },
};
