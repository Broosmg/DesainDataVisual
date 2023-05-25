import { Module } from '@nestjs/common';
import { OutbreakService } from './outbreak.service';
import { OutbreakResolver } from './outbreak.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outbreak } from './entities/outbreak.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Outbreak])],
  providers: [OutbreakResolver, OutbreakService],
})
export class OutbreakModule {}
