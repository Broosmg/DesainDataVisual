import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './entities/district.entity';
import { CityModule } from '../city/city.module';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([District]), CityModule, LocationModule],
  providers: [DistrictResolver, DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
