import { Injectable } from '@nestjs/common';
import { GetChartArgs } from './dto/get-chart.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Outbreak } from '../outbreak/entities/outbreak.entity';
import { GetCityTopArgs } from './dto/get-cityTop.args';

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
    query.addSelect('sum(dead) + sum(sufferer)', 'affected');

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

  cityTop(getCityTopArgs: GetCityTopArgs) {
    const query = this.outbreakRepository.createQueryBuilder('o');

    query.select('c.city_name', 'cityName');
    query.addSelect('sum(o.dead)', 'dead');
    query.addSelect('sum(o.sufferer)', 'sufferer');
    query.addSelect('sum(o.dead) + sum(o.sufferer)', 'affected');

    query.innerJoin('district', 'd', 'd.district_id = o.district_id');
    query.leftJoin('city', 'c', 'c.city_id = d.city_id');

    if (getCityTopArgs.outbreakCategoryId) {
      query.andWhere(`o.outbreak_category_id in (:...outbreakCategoryId)`, {
        outbreakCategoryId: getCityTopArgs.outbreakCategoryId.split(','),
      });
    }

    query.andWhere(`extract(year from o.created_at) in (:...year)`, {
      year: getCityTopArgs.year.split(','),
    });

    return query
      .orderBy('affected', 'DESC')
      .limit(getCityTopArgs.limit)
      .groupBy('c.city_id')
      .getRawMany();
  }
}
