import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: configService.get<any>('DB_TYPE') || 'mysql',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: configService.get<number>('DB_PORT') || 3306,
  username: configService.get<string>('DB_USERNAME') || 'root',
  password: configService.get<string>('DB_PASSWORD') || 'password',
  database: configService.get<string>('DB_NAME') || 'your_database_name',
  migrations: [__dirname + '/../src/migrations/*.{js,ts}'],
});
