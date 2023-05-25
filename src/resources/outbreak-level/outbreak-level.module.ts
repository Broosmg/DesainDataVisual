import { Module } from '@nestjs/common';
import { OutbreakLevelService } from './outbreak-level.service';
import { OutbreakLevelResolver } from './outbreak-level.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutbreakLevel } from './entities/outbreak-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OutbreakLevel])],
  providers: [OutbreakLevelResolver, OutbreakLevelService],
  exports: [OutbreakLevelService],
})
export class OutbreakLevelModule {}
