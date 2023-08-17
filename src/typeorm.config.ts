import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

const configService = new ConfigService();

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST') || 'localhost',
  port: configService.get('DB_PORT') || 5432,
  username: configService.get('DB_USERNAME') || 'postgre',
  password: configService.get('DB_PASSWORD') || 'password',
  database: configService.get('DB_NAME') || 'your_database_name',
  entities: [join(__dirname, '**/*.entity.js')],
};
