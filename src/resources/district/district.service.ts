import { Injectable } from '@nestjs/common';
import { CreateDistrictInput } from './dto/create-district.input';
import { UpdateDistrictInput } from './dto/update-district.input';
import { District } from './entities/district.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetDistrictArgs } from './dto/get-district.args';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ) {}

  create(createDistrictInput: CreateDistrictInput) {
    return this.districtRepository.save(
      this.districtRepository.create(createDistrictInput),
    );
  }

  findAll(getDistrictArgs: GetDistrictArgs, count = false) {
    const query = this.districtRepository.createQueryBuilder();

    if (getDistrictArgs.query) {
      query.andWhere(
        `lower(district_name) LIKE '%${getDistrictArgs.query.toLowerCase()}%'`,
      );
    }

    if (getDistrictArgs.cityId) {
      query.andWhere(`city_id in (:...cityId)`, {
        cityId: getDistrictArgs.cityId.split(','),
      });
    }

    if (getDistrictArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getDistrictArgs.startAt.toISOString()}'`,
      );
    }

    if (getDistrictArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getDistrictArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query
      .skip(getDistrictArgs.offset)
      .take(getDistrictArgs.limit)
      .getMany();
  }

  findOne(id: number) {
    return this.districtRepository.findOneBy({ id: id });
  }

  async update(id: number, updateDistrictInput: UpdateDistrictInput) {
    const data = await this.districtRepository.preload({
      id: id,
      ...updateDistrictInput,
    });

    return this.districtRepository.save(data);
  }

  remove(id: number) {
    return this.districtRepository.softDelete(id);
  }
}
