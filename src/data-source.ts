import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: configService.get<number>('DB_PORT') || 5432,
  username: configService.get<string>('DB_USERNAME') || 'postgre',
  password: configService.get<string>('DB_PASSWORD') || 'password',
  database: configService.get<string>('DB_NAME') || 'your_database_name',
  migrations: [join(__dirname, '../src/migrations/*.ts')],
});
