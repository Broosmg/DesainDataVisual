import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { Location } from './entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetLocationArgs } from './dto/get-location.args';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  create(createLocationInput: CreateLocationInput) {
    return this.locationRepository.save(
      this.locationRepository.create(createLocationInput),
    );
  }

  findAll(getLocationArgs: GetLocationArgs) {
    const query = this.locationRepository.createQueryBuilder();

    if (getLocationArgs.districtId) {
      query.where(`district_id in (${getLocationArgs.districtId})`);
    }

    if (getLocationArgs.startAt) {
      query.where(`date(created_at) >= '${getLocationArgs.startAt}'`);
    }

    if (getLocationArgs.endAt) {
      query.where(`date(created_at) <= '${getLocationArgs.endAt}'`);
    }

    return query
      .skip(getLocationArgs.offset)
      .take(getLocationArgs.limit)
      .getMany();
  }

  findOne(id: number) {
    return this.locationRepository.findOneBy({ id: id });
  }

  async update(id: number, updateLocationInput: UpdateLocationInput) {
    const provinceData = await this.locationRepository.preload({
      id: id,
      ...updateLocationInput,
    });

    return this.locationRepository.save(provinceData);
  }

  remove(id: number) {
    return this.locationRepository.softDelete(id);
  }
}
