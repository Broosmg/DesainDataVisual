import { Module } from '@nestjs/common';
import { OutbreakService } from './outbreak.service';
import { OutbreakResolver } from './outbreak.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outbreak } from './entities/outbreak.entity';
import { KecamatanModule } from '../kecamatan/kecamatan.module';
import { OutbreakLevelModule } from '../outbreak-level/outbreak-level.module';
import { OutbreakCategoryModule } from '../outbreak-category/outbreak-category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Outbreak]),
    KecamatanModule,
    OutbreakCategoryModule,
    OutbreakLevelModule,
  ],
  providers: [OutbreakResolver, OutbreakService],
})
export class OutbreakModule {}
