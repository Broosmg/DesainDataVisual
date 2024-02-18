import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST') || 'localhost',
  port: configService.get('DB_PORT') || 3306,
  username: configService.get('DB_USERNAME') || 'root',
  password: configService.get('DB_PASSWORD') || 'password',
  database: configService.get('DB_NAME') || 'your_database_name',
  migrations: [
    join(__dirname, '../src/migrations/*.ts'),
    join(__dirname, '../src/migrations/mysql/*.ts'),
  ],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
