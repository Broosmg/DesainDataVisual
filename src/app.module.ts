import config from './typeorm.config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [AppController],
})
export class AppModule {}
