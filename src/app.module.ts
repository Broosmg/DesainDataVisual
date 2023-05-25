import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './typeorm.config';
import { ProvinceModule } from './resources/province/province.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CityModule } from './resources/city/city.module';
import { KecamatanModule } from './resources/kecamatan/kecamatan.module';
import { OutbreakModule } from './resources/outbreak/outbreak.module';
import { OutbreakLevelModule } from './resources/outbreak-level/outbreak-level.module';
import { OutbreakCategoryModule } from './resources/outbreak-category/outbreak-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: new ConfigService().get<string>('NODE_ENV') == 'development',
    }),
    KecamatanModule,
    CityModule,
    ProvinceModule,
    OutbreakModule,
    OutbreakLevelModule,
    OutbreakCategoryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
