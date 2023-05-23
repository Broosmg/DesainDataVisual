import { Injectable } from '@nestjs/common';
import { CreateKecamatanInput } from './dto/create-kecamatan.input';
import { UpdateKecamatanInput } from './dto/update-kecamatan.input';

@Injectable()
export class KecamatanService {
  create(createKecamatanInput: CreateKecamatanInput) {
    return 'This action adds a new kecamatan';
  }

  findAll() {
    return `This action returns all kecamatan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kecamatan`;
  }

  update(id: number, updateKecamatanInput: UpdateKecamatanInput) {
    return `This action updates a #${id} kecamatan`;
  }

  remove(id: number) {
    return `This action removes a #${id} kecamatan`;
  }
}
