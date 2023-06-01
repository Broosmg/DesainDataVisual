import { Injectable } from '@nestjs/common';
import { CreateOutbreakCategoryInput } from './dto/create-outbreak-category.input';
import { UpdateOutbreakCategoryInput } from './dto/update-outbreak-category.input';
import { GetOutbreakCategoryArgs } from './dto/get-outbreakCategory.args';
import { OutbreakCategory } from './entities/outbreak-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OutbreakCategoryService {
  constructor(
    @InjectRepository(OutbreakCategory)
    private readonly outbreakCategoryRepository: Repository<OutbreakCategory>,
  ) {}

  create(createOutbreakCategoryInput: CreateOutbreakCategoryInput) {
    return this.outbreakCategoryRepository.save(
      this.outbreakCategoryRepository.create(createOutbreakCategoryInput),
    );
  }

  findAll(getOutbreakCategoryArgs: GetOutbreakCategoryArgs, count = false) {
    const query = this.outbreakCategoryRepository.createQueryBuilder();

    if (getOutbreakCategoryArgs.query) {
      query.andWhere(
        `lower(outbreak_category_name) LIKE '%${getOutbreakCategoryArgs.query.toLowerCase()}%'`,
      );
    }

    if (getOutbreakCategoryArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getOutbreakCategoryArgs.startAt.toISOString()}'`,
      );
    }

    if (getOutbreakCategoryArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getOutbreakCategoryArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query
      .skip(getOutbreakCategoryArgs.offset)
      .take(getOutbreakCategoryArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.outbreakCategoryRepository.findOneBy({ id: id });
  }

  async update(
    id: string,
    updateOutbreakCategoryInput: UpdateOutbreakCategoryInput,
  ) {
    const data = await this.outbreakCategoryRepository.preload({
      id: id,
      ...updateOutbreakCategoryInput,
    });

    return this.outbreakCategoryRepository.save(data);
  }

  remove(id: string) {
    return this.outbreakCategoryRepository.softDelete(id);
  }
}
