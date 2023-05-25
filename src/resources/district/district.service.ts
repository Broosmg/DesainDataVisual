import { Injectable } from '@nestjs/common';
import { CreateDistrictInput } from './dto/create-district.input';
import { UpdateDistrictInput } from './dto/update-district.input';
import { District } from './entities/district.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetDistrictArgs } from './dto/get-district.args copy';

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

  findAll(getDistrictArgs: GetDistrictArgs) {
    const query = this.districtRepository.createQueryBuilder();

    if (getDistrictArgs.query) {
      query.where(`district_name LIKE '%${getDistrictArgs.query}%'`);
    }

    if (getDistrictArgs.cityId) {
      query.where(`city_id = ${getDistrictArgs.cityId}`);
    }

    if (getDistrictArgs.startAt) {
      query.where(`created_at >= '${getDistrictArgs.startAt}'`);
    }

    if (getDistrictArgs.endAt) {
      query.where(`created_at <= '${getDistrictArgs.endAt}'`);
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
    const provinceData = await this.districtRepository.preload({
      id: id,
      ...updateDistrictInput,
    });

    return this.districtRepository.save(provinceData);
  }

  remove(id: number) {
    return this.districtRepository.softDelete(id);
  }
}
