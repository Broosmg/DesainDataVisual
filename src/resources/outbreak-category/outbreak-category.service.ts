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

  findAll(getOutbreakCategoryArgs: GetOutbreakCategoryArgs) {
    const query = this.outbreakCategoryRepository.createQueryBuilder();

    if (getOutbreakCategoryArgs.query) {
      query.where(
        `outbreak_category_name LIKE '%${getOutbreakCategoryArgs.query}%'`,
      );
    }

    if (getOutbreakCategoryArgs.startAt) {
      query.where(`created_at >= '${getOutbreakCategoryArgs.startAt}'`);
    }

    if (getOutbreakCategoryArgs.endAt) {
      query.where(`created_at <= '${getOutbreakCategoryArgs.endAt}'`);
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
    const provinceData = await this.outbreakCategoryRepository.preload({
      id: id,
      ...updateOutbreakCategoryInput,
    });

    return this.outbreakCategoryRepository.save(provinceData);
  }

  remove(id: string) {
    return this.outbreakCategoryRepository.softDelete(id);
  }
}
