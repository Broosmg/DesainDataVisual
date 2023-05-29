import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './typeorm.config';
import { ProvinceModule } from './resources/province/province.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CityModule } from './resources/city/city.module';
import { OutbreakModule } from './resources/outbreak/outbreak.module';
import { OutbreakCategoryModule } from './resources/outbreak-category/outbreak-category.module';
import { DistrictModule } from './resources/district/district.module';
import { SecurityMiddleware } from './middleware/security/security.middleware';
import { LocationModule } from './resources/location/location.module';

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
    CityModule,
    ProvinceModule,
    OutbreakModule,
    OutbreakCategoryModule,
    DistrictModule,
    LocationModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SecurityMiddleware).forRoutes('graphql');
  }
}
