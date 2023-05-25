import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

const configService = new ConfigService();

export const config: TypeOrmModuleOptions = {
  type: configService.get<any>('DB_TYPE') || 'mysql',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: configService.get<number>('DB_PORT') || 3306,
  username: configService.get<string>('DB_USERNAME') || 'root',
  password: configService.get<string>('DB_PASSWORD') || 'password',
  database: configService.get<string>('DB_NAME') || 'your_database_name',
  entities: [join(__dirname, '**/*.entity.js')],
};
