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
    return this.provinceRepository.save(createProvinceInput);
  }

  findAll(getProvinceArgs: GetProvinceArgs) {
    const query = this.provinceRepository.createQueryBuilder('entity');

    if (getProvinceArgs.query) {
      query.where(`entity.province_name LIKE '%${getProvinceArgs.query}%'`);
    }

    if (getProvinceArgs.startAt) {
      query.where(`entity.created_at >= '${getProvinceArgs.startAt}'`);
    }

    if (getProvinceArgs.endAt) {
      query.where(`entity.created_at <= '${getProvinceArgs.endAt}'`);
    }

    return query.getMany();
  }

  findOne(id: number) {
    return this.provinceRepository.findOneBy({ provinceId: id });
  }

  update(id: number, updateProvinceInput: UpdateProvinceInput) {
    return this.provinceRepository.update(id, updateProvinceInput);
  }

  remove(id: number) {
    return this.provinceRepository.softDelete(id);
  }
}
