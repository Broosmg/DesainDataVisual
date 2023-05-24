import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { City } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceModule } from '../province/province.module';

@Module({
  imports: [TypeOrmModule.forFeature([City]), ProvinceModule],
  providers: [CityResolver, CityService],
})
export class CityModule {}
