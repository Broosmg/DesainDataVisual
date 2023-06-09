import { Injectable } from '@nestjs/common';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { GetCityArgs } from './dto/get-city.args';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  create(createCityInput: CreateCityInput) {
    return this.cityRepository.save(
      this.cityRepository.create(createCityInput),
    );
  }

  findAll(getCityArgs: GetCityArgs, count = false) {
    const query = this.cityRepository.createQueryBuilder();

    if (getCityArgs.query) {
      query.andWhere(
        `lower(city_name) LIKE '%${getCityArgs.query.toLowerCase()}%'`,
      );
    }

    if (getCityArgs.provinceId) {
      query.andWhere(`province_id in (:...provinceId)`, {
        provinceId: getCityArgs.provinceId.split(','),
      });
    }

    if (getCityArgs.startAt) {
      query.andWhere(
        `date(created_at) >= '${getCityArgs.startAt.toISOString()}'`,
      );
    }

    if (getCityArgs.endAt) {
      query.andWhere(
        `date(created_at) <= '${getCityArgs.endAt.toISOString()}'`,
      );
    }

    if (count) {
      return query.getCount();
    }

    return query.skip(getCityArgs.offset).take(getCityArgs.limit).getMany();
  }

  findOne(id: number) {
    return this.cityRepository.findOneBy({ id: id });
  }

  async update(id: number, updateCityInput: UpdateCityInput) {
    const data = await this.cityRepository.preload({
      id: id,
      ...updateCityInput,
    });

    return this.cityRepository.save(data);
  }

  remove(id: number) {
    return this.cityRepository.softDelete(id);
  }
}
