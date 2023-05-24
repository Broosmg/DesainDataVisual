import { Module } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { KecamatanResolver } from './kecamatan.resolver';
import { Kecamatan } from './entities/kecamatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kecamatan])],
  providers: [KecamatanResolver, KecamatanService],
})
export class KecamatanModule {}
