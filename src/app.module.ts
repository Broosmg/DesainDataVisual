import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './typeorm.config';
import { KecamatanModule } from './resources/kecamatan/kecamatan.module';
import { CityModule } from './resources/city/city.module';
import { ProvinceModule } from './resources/province/province.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, 'schema.gql'),
    }),
    KecamatanModule,
    CityModule,
    ProvinceModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
