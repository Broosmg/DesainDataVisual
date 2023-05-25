import { Module } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { KecamatanResolver } from './kecamatan.resolver';
import { Kecamatan } from './entities/kecamatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from '../city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([Kecamatan]), CityModule],
  providers: [KecamatanResolver, KecamatanService],
  exports: [KecamatanService],
})
export class KecamatanModule {}
