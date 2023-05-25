import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './entities/district.entity';
import { CityModule } from '../city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([District]), CityModule],
  providers: [DistrictResolver, DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
