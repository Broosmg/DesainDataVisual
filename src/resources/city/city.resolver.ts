import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { GetCityArgs } from './dto/get-city.args';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Mutation(() => City)
  createCity(@Args('createCityInput') createCityInput: CreateCityInput) {
    return this.cityService.create(createCityInput);
  }

  @Query(() => [City], { name: 'cities' })
  findAll(getCityArgs: GetCityArgs) {
    return this.cityService.findAll(getCityArgs);
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id') id: string) {
    return this.cityService.findOne(id);
  }

  @Mutation(() => City)
  updateCity(@Args('updateCityInput') updateCityInput: UpdateCityInput) {
    return this.cityService.update(updateCityInput.cityId, updateCityInput);
  }

  @Mutation(() => City)
  removeCity(@Args('id') id: string) {
    return this.cityService.remove(id);
  }
}
