import { Injectable } from '@nestjs/common';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';

@Injectable()
export class ProvinceService {
  create(createProvinceInput: CreateProvinceInput) {
    return 'This action adds a new province';
  }

  findAll() {
    return `This action returns all province`;
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  update(id: number, updateProvinceInput: UpdateProvinceInput) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
