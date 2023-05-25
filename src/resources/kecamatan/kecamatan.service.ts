import { Injectable } from '@nestjs/common';
import { CreateKecamatanInput } from './dto/create-kecamatan.input';
import { UpdateKecamatanInput } from './dto/update-kecamatan.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetKecamatanArgs } from './dto/get-kecamatan.args';
import { Kecamatan } from './entities/kecamatan.entity';

@Injectable()
export class KecamatanService {
  constructor(
    @InjectRepository(Kecamatan)
    private readonly kecamatanRepository: Repository<Kecamatan>,
  ) {}

  create(createKecamatanInput: CreateKecamatanInput) {
    return this.kecamatanRepository.save(
      this.kecamatanRepository.create(createKecamatanInput),
    );
  }

  findAll(getKecamatanArgs: GetKecamatanArgs) {
    const query = this.kecamatanRepository.createQueryBuilder();

    if (getKecamatanArgs.query) {
      query.where(`kecamatan_name LIKE '%${getKecamatanArgs.query}%'`);
    }

    if (getKecamatanArgs.startAt) {
      query.where(`created_at >= '${getKecamatanArgs.startAt}'`);
    }

    if (getKecamatanArgs.endAt) {
      query.where(`created_at <= '${getKecamatanArgs.endAt}'`);
    }

    return query
      .skip(getKecamatanArgs.offset)
      .take(getKecamatanArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.kecamatanRepository.findOneBy({ id: id });
  }

  async update(id: string, updateKecamatanInput: UpdateKecamatanInput) {
    const provinceData = await this.kecamatanRepository.preload({
      id: id,
      ...updateKecamatanInput,
    });

    return this.kecamatanRepository.save(provinceData);
  }

  remove(id: string) {
    return this.kecamatanRepository.softDelete(id);
  }
}
