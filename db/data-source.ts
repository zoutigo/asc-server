import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  //   url: 'mysql//zoutigo:valery54@localhost:3306/asc_dev',
  //   url: 'mysql//root:root@db:3306/asc_dev',
  url: configService.get<string>('MYSQL_URL'),
  //   url: process.env.MYSQL_URL,
  //   host: 'db',
  //   username: 'root',
  //   password: 'root',
  //   port: 3306,
  //   database: 'asc_dev',
  // synchronize: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
