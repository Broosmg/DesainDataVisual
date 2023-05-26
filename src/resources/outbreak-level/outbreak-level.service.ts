import { Injectable } from '@nestjs/common';
import { CreateOutbreakLevelInput } from './dto/create-outbreak-level.input';
import { UpdateOutbreakLevelInput } from './dto/update-outbreak-level.input';
import { OutbreakLevel } from './entities/outbreak-level.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetOutbreakLevelArgs } from './dto/get-outbreakLevel.args';

@Injectable()
export class OutbreakLevelService {
  constructor(
    @InjectRepository(OutbreakLevel)
    private readonly outbreakLevelRepository: Repository<OutbreakLevel>,
  ) {}

  create(createOutbreakLevelInput: CreateOutbreakLevelInput) {
    return this.outbreakLevelRepository.save(
      this.outbreakLevelRepository.create(createOutbreakLevelInput),
    );
  }

  findAll(getOutbreakLevelArgs: GetOutbreakLevelArgs) {
    const query = this.outbreakLevelRepository.createQueryBuilder();

    if (getOutbreakLevelArgs.query) {
      query.where(
        `lower(outbreak_level_name) LIKE '%${getOutbreakLevelArgs.query}%'`,
      );
    }

    if (getOutbreakLevelArgs.startAt) {
      query.where(`created_at >= '${getOutbreakLevelArgs.startAt}'`);
    }

    if (getOutbreakLevelArgs.endAt) {
      query.where(`created_at <= '${getOutbreakLevelArgs.endAt}'`);
    }

    return query
      .skip(getOutbreakLevelArgs.offset)
      .take(getOutbreakLevelArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.outbreakLevelRepository.findOneBy({ id: id });
  }

  async update(id: string, updateOutbreakLevelInput: UpdateOutbreakLevelInput) {
    const provinceData = await this.outbreakLevelRepository.preload({
      id: id,
      ...updateOutbreakLevelInput,
    });

    return this.outbreakLevelRepository.save(provinceData);
  }

  remove(id: string) {
    return this.outbreakLevelRepository.softDelete(id);
  }
}
