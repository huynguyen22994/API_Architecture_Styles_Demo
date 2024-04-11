import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username:'blm-demo',
  password: 'blm-demo',
  database: 'blm-demo',
  logging: true,
  migrations: [__dirname + '/migrations/*.ts'],
});
