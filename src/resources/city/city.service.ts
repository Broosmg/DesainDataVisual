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

  findAll(getCityArgs: GetCityArgs) {
    const query = this.cityRepository.createQueryBuilder();

    if (getCityArgs.query) {
      query.where(`city.city_name LIKE '%${getCityArgs.query}%'`);
    }

    if (getCityArgs.startAt) {
      query.where(`city.created_at >= '${getCityArgs.startAt}'`);
    }

    if (getCityArgs.endAt) {
      query.where(`city.created_at <= '${getCityArgs.endAt}'`);
    }

    return query.skip(getCityArgs.offset).take(getCityArgs.limit).getMany();
  }

  findOne(id: string) {
    return this.cityRepository.findOneBy({ id: id });
  }

  async update(id: string, updateCityInput: UpdateCityInput) {
    const provinceData = await this.cityRepository.preload({
      id: id,
      ...updateCityInput,
    });

    return this.cityRepository.save(provinceData);
  }

  remove(id: string) {
    return this.cityRepository.softDelete(id);
  }
}
