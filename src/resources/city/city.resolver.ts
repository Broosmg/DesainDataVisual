import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { GetCityArgs } from './dto/get-city.args';
import { Province } from '../province/entities/province.entity';
import { ProvinceService } from '../province/province.service';

@Resolver(() => City)
export class CityResolver {
  constructor(
    private readonly cityService: CityService,
    private readonly provinceService: ProvinceService,
  ) {}

  @Mutation(() => City)
  createCity(@Args('createCityInput') createCityInput: CreateCityInput) {
    return this.cityService.create(createCityInput);
  }

  @Query(() => [City], { name: 'cities' })
  findAll(@Args() getCityArgs: GetCityArgs) {
    return this.cityService.findAll(getCityArgs);
  }

  @Query(() => City, { name: 'city', nullable: true })
  findOne(@Args('id') id: number) {
    return this.cityService.findOne(id);
  }

  @Mutation(() => City)
  updateCity(@Args('updateCityInput') updateCityInput: UpdateCityInput) {
    return this.cityService.update(updateCityInput.id, updateCityInput);
  }

  @Mutation(() => City)
  removeCity(@Args('id') id: number) {
    return this.cityService.remove(id);
  }

  @Query(() => Number, { name: 'countCity' })
  count(@Args() getCityArgs: GetCityArgs) {
    return this.cityService.findAll(getCityArgs, true);
  }

  @ResolveField(() => Province)
  province(@Parent() city: City) {
    return this.provinceService.findOne(city.provinceId);
  }
}
