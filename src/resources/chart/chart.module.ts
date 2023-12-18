import { Module } from '@nestjs/common';
import { ChartService } from './chart.service';
import { ChartResolver } from './chart.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outbreak } from '../outbreak/entities/outbreak.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Outbreak])],
  providers: [ChartResolver, ChartService],
})
export class ChartModule {}
