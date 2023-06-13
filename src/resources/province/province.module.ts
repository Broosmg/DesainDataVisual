import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceResolver } from './province.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Province])],
  providers: [ProvinceResolver, ProvinceService],
  exports: [ProvinceService],
})
export class ProvinceModule {}
