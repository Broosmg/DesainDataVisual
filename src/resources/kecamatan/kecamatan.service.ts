import { Injectable } from '@nestjs/common';
import { CreateKecamatanInput } from './dto/create-kecamatan.input';
import { UpdateKecamatanInput } from './dto/update-kecamatan.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetCityArgs } from './dto/get-kecamatan.args';
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

  findAll(getCityArgs: GetCityArgs) {
    const query = this.kecamatanRepository.createQueryBuilder();

    if (getCityArgs.query) {
      query.where(`kecamatan.city_name LIKE '%${getCityArgs.query}%'`);
    }

    if (getCityArgs.startAt) {
      query.where(`kecamatan.created_at >= '${getCityArgs.startAt}'`);
    }

    if (getCityArgs.endAt) {
      query.where(`kecamatan.created_at <= '${getCityArgs.endAt}'`);
    }

    return query.skip(getCityArgs.offset).take(getCityArgs.limit).getMany();
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
