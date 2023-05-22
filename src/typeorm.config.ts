import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const config: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'your_database_name',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../src/migrations/*.{js,ts}'],
};

export default config;
