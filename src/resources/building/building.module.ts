import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingResolver } from './building.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './entities/building.entity';
import { BuildingTypeModule } from '../building-type/building-type.module';
import { DistrictModule } from '../district/district.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Building]),
    BuildingTypeModule,
    DistrictModule,
  ],
  providers: [BuildingResolver, BuildingService],
})
export class BuildingModule {}
