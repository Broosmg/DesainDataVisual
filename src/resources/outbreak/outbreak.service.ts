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

  findAll(getOutbreakArgs: GetOutbreakArgs, count = false) {
    const query = this.outbreakRepository.createQueryBuilder();

    if (getOutbreakArgs.outbreakCategoryId) {
      query.andWhere(`outbreak_category_id in (:...outbreakCategoryId)`, {
        outbreakCategoryId: getOutbreakArgs.outbreakCategoryId.split(','),
      });
    }

    if (getOutbreakArgs.districtId) {
      query.andWhere(`district_id in (:...districtId)`, {
        districtId: getOutbreakArgs.districtId.split(','),
      });
    }

    if (getOutbreakArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getOutbreakArgs.startAt.toISOString()}'`,
      );
    }

    if (getOutbreakArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getOutbreakArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
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
    const data = await this.outbreakRepository.preload({
      id: id,
      ...updateOutbreakInput,
    });

    return this.outbreakRepository.save(data);
  }

  remove(id: string) {
    return this.outbreakRepository.softDelete(id);
  }
}
