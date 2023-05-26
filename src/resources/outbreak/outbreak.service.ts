import { Injectable } from '@nestjs/common';
import { CreateOutbreakInput } from './dto/create-outbreak.input';
import { UpdateOutbreakInput } from './dto/update-outbreak.input';
import { GetOutbreakArgs } from './dto/get-outbreak.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Outbreak } from './entities/outbreak.entity';

@Injectable()
export class OutbreakService {
  constructor(
    @InjectRepository(Outbreak)
    private readonly outbreakRepository: Repository<Outbreak>,
  ) {}

  create(createOutbreakInput: CreateOutbreakInput) {
    return this.outbreakRepository.save(
      this.outbreakRepository.create(createOutbreakInput),
    );
  }

  findAll(getOutbreakArgs: GetOutbreakArgs) {
    const query = this.outbreakRepository.createQueryBuilder();

    if (getOutbreakArgs.outbreakCategoryId) {
      query.where(
        `outbreak_category_id = '${getOutbreakArgs.outbreakCategoryId}'`,
      );
    }

    if (getOutbreakArgs.outbreakLevelId) {
      query.where(`outbreak_level_id = '${getOutbreakArgs.outbreakLevelId}'`);
    }

    if (getOutbreakArgs.districtId) {
      query.where(`district_id in (${getOutbreakArgs.districtId})`);
    }

    if (getOutbreakArgs.startAt) {
      query.where(`created_at >= '${getOutbreakArgs.startAt}'`);
    }

    if (getOutbreakArgs.endAt) {
      query.where(`created_at <= '${getOutbreakArgs.endAt}'`);
    }

    return query
      .skip(getOutbreakArgs.offset)
      .take(getOutbreakArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.outbreakRepository.findOneBy({ id: id });
  }

  async update(id: string, updateOutbreakInput: UpdateOutbreakInput) {
    const provinceData = await this.outbreakRepository.preload({
      id: id,
      ...updateOutbreakInput,
    });

    return this.outbreakRepository.save(provinceData);
  }

  remove(id: string) {
    return this.outbreakRepository.softDelete(id);
  }
}
