import { Injectable } from '@nestjs/common';
import { CreateBuildingTypeInput } from './dto/create-building-type.input';
import { UpdateBuildingTypeInput } from './dto/update-building-type.input';
import { GetBuildingTypeArgs } from './dto/get-building-type.args';
import { BuildingType } from './entities/building-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuildingTypeService {
  constructor(
    @InjectRepository(BuildingType)
    private readonly buildingTypeRepository: Repository<BuildingType>,
  ) {}

  create(createBuildingTypeInput: CreateBuildingTypeInput) {
    return this.buildingTypeRepository.save(
      this.buildingTypeRepository.create(createBuildingTypeInput),
    );
  }

  findAll(getBuildingTypeArgs: GetBuildingTypeArgs, count = false) {
    const query = this.buildingTypeRepository.createQueryBuilder();

    if (getBuildingTypeArgs.query) {
      query.andWhere(
        `lower(building_type_name) LIKE '%${getBuildingTypeArgs.query.toLowerCase()}%'`,
      );
    }

    if (getBuildingTypeArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getBuildingTypeArgs.startAt.toISOString()}'`,
      );
    }

    if (getBuildingTypeArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getBuildingTypeArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query
      .orderBy('created_at', 'DESC')
      .skip(getBuildingTypeArgs.offset)
      .take(getBuildingTypeArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.buildingTypeRepository.findOneBy({ id: id });
  }

  async update(id: string, updateBuildingTypeInput: UpdateBuildingTypeInput) {
    const data = await this.buildingTypeRepository.preload({
      id: id,
      ...updateBuildingTypeInput,
    });

    return this.buildingTypeRepository.save(data);
  }

  remove(id: string) {
    return this.buildingTypeRepository.softDelete(id);
  }
}
