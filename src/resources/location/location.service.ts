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

  findAll(getLocationArgs: GetLocationArgs, count = false) {
    const query = this.locationRepository.createQueryBuilder();

    if (getLocationArgs.districtId) {
      query.andWhere(`district_id in (:...districtId)`, {
        districtId: getLocationArgs.districtId.split(','),
      });
    }

    if (getLocationArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getLocationArgs.startAt.toISOString()}'`,
      );
    }

    if (getLocationArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getLocationArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query
      .skip(getLocationArgs.offset)
      .take(getLocationArgs.limit)
      .getMany();
  }

  findOne(id: string) {
    return this.locationRepository.findOneBy({ id: id });
  }

  async update(id: string, updateLocationInput: UpdateLocationInput) {
    const data = await this.locationRepository.preload({
      id: id,
      ...updateLocationInput,
    });

    return this.locationRepository.save(data);
  }

  remove(id: string) {
    return this.locationRepository.softDelete(id);
  }
}
