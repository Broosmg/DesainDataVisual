import { Module } from '@nestjs/common';
import { BuildingTypeService } from './building-type.service';
import { BuildingTypeResolver } from './building-type.resolver';
import { BuildingType } from './entities/building-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BuildingType])],
  providers: [BuildingTypeResolver, BuildingTypeService],
  exports: [BuildingTypeService],
})
export class BuildingTypeModule {}
