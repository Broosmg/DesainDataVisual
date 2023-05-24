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

  findAll(getProvinceArgs: GetProvinceArgs) {
    const query = this.provinceRepository.createQueryBuilder();

    if (getProvinceArgs.query) {
      query.where(`province.province_name LIKE '%${getProvinceArgs.query}%'`);
    }

    if (getProvinceArgs.startAt) {
      query.where(`province.created_at >= '${getProvinceArgs.startAt}'`);
    }

    if (getProvinceArgs.endAt) {
      query.where(`province.created_at <= '${getProvinceArgs.endAt}'`);
    }

    return query
      .skip(getProvinceArgs.offset)
      .take(getProvinceArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.provinceRepository.findOneBy({ id: id });
  }

  async update(id: string, updateProvinceInput: UpdateProvinceInput) {
    const provinceData = await this.provinceRepository.preload({
      id: id,
      ...updateProvinceInput,
    });

    return this.provinceRepository.save(provinceData);
  }

  remove(id: string) {
    return this.provinceRepository.softDelete(id);
  }
}
