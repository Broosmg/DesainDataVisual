import { Module } from '@nestjs/common';
import { OutbreakService } from './outbreak.service';
import { OutbreakResolver } from './outbreak.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outbreak } from './entities/outbreak.entity';
import { OutbreakCategoryModule } from '../outbreak-category/outbreak-category.module';
import { DistrictModule } from '../district/district.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Outbreak]),
    OutbreakCategoryModule,
    DistrictModule,
  ],
  providers: [OutbreakResolver, OutbreakService],
})
export class OutbreakModule {}
