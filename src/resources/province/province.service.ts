import { Injectable } from '@nestjs/common';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';
import { Province } from './entities/province.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  create(createProvinceInput: CreateProvinceInput) {
    return this.provinceRepository.insert(createProvinceInput);
  }

  findAll() {
    return this.provinceRepository.find();
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
