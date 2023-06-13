import { Injectable } from '@nestjs/common';
import { CreateBuildingInput } from './dto/create-building.input';
import { UpdateBuildingInput } from './dto/update-building.input';
import { GetBuildingArgs } from './dto/get-building.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {}

  create(createBuildingInput: CreateBuildingInput) {
    return this.buildingRepository.save(
      this.buildingRepository.create(createBuildingInput),
    );
  }

  findAll(getBuildingArgs: GetBuildingArgs, count = false) {
    const query = this.buildingRepository.createQueryBuilder();

    if (getBuildingArgs.query) {
      query.andWhere(
        `lower(building_name) LIKE '%${getBuildingArgs.query.toLowerCase()}%'`,
      );
    }

    if (getBuildingArgs.typeId) {
      query.andWhere(`building_type_id in (:...typeId)`, {
        typeId: getBuildingArgs.typeId.split(','),
      });
    }

    if (getBuildingArgs.districtId) {
      query.andWhere(`district_id in (:...districtId)`, {
        districtId: getBuildingArgs.districtId.split(','),
      });
    }

    if (getBuildingArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getBuildingArgs.startAt.toISOString()}'`,
      );
    }

    if (getBuildingArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getBuildingArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query
      .skip(getBuildingArgs.offset)
      .take(getBuildingArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.buildingRepository.findOneBy({ id: id });
  }

  async update(id: string, updateBuildingInput: UpdateBuildingInput) {
    const data = await this.buildingRepository.preload({
      id: id,
      ...updateBuildingInput,
    });

    return this.buildingRepository.save(data);
  }

  remove(id: string) {
    return this.buildingRepository.softDelete(id);
  }
}
