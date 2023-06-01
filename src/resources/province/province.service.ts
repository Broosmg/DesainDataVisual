import { Injectable } from '@nestjs/common';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';
import { Province } from './entities/province.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetProvinceArgs } from './dto/get-province.args';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  create(createProvinceInput: CreateProvinceInput) {
    return this.provinceRepository.save(
      this.provinceRepository.create(createProvinceInput),
    );
  }

  async findAll(getProvinceArgs: GetProvinceArgs, count = false) {
    const query = this.provinceRepository.createQueryBuilder();

    if (getProvinceArgs.query) {
      query.andWhere(
        `lower(province_name) LIKE '%${getProvinceArgs.query.toLowerCase()}%'`,
      );
    }

    if (getProvinceArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getProvinceArgs.startAt.toISOString()}'`,
      );
    }

    if (getProvinceArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getProvinceArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query
      .skip(getProvinceArgs.offset)
      .take(getProvinceArgs.limit)
      .getMany();
  }

  findOne(id: number) {
    return this.provinceRepository.findOneBy({ id: id });
  }

  async update(id: number, updateProvinceInput: UpdateProvinceInput) {
    const provinceData = await this.provinceRepository.preload({
      id: id,
      ...updateProvinceInput,
    });

    return this.provinceRepository.save(provinceData);
  }

  remove(id: number) {
    return this.provinceRepository.softDelete(id);
  }
}
