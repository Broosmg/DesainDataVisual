import { Module } from '@nestjs/common';
import { KecamatanService } from './kecamatan.service';
import { KecamatanResolver } from './kecamatan.resolver';

@Module({
  providers: [KecamatanResolver, KecamatanService]
})
export class KecamatanModule {}
