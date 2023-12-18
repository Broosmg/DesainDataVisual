import { Injectable } from '@nestjs/common';
import { GetChartArgs } from './dto/get-chart.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Outbreak } from '../outbreak/entities/outbreak.entity';

@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(Outbreak)
    private readonly outbreakRepository: Repository<Outbreak>,
  ) {}

  findAll(getChartArgs: GetChartArgs) {
    const query = this.outbreakRepository.createQueryBuilder();

    query.select('extract(month from created_at)', 'month');
    query.addSelect('sum(dead)', 'dead');
    query.addSelect('sum(sufferer)', 'sufferer');

    if (getChartArgs.outbreakCategoryId) {
      query.andWhere(`outbreak_category_id in (:...outbreakCategoryId)`, {
        outbreakCategoryId: getChartArgs.outbreakCategoryId.split(','),
      });
    }

    query.andWhere(`extract(year from created_at) in (:...year)`, {
      year: getChartArgs.year.split(','),
    });

    query.groupBy('extract(month from created_at)');

    return query.getRawMany();
  }
}
