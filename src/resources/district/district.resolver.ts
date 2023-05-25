import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { DistrictService } from './district.service';
import { District } from './entities/district.entity';
import { CreateDistrictInput } from './dto/create-district.input';
import { UpdateDistrictInput } from './dto/update-district.input';
import { GetDistrictArgs } from './dto/get-district.args';
import { City } from '../city/entities/city.entity';
import { CityService } from '../city/city.service';

@Resolver(() => District)
export class DistrictResolver {
  constructor(
    private readonly districtService: DistrictService,
    private readonly cityService: CityService,
  ) {}

  @Mutation(() => District)
  createDistrict(
    @Args('createDistrictInput') createDistrictInput: CreateDistrictInput,
  ) {
    return this.districtService.create(createDistrictInput);
  }

  @Query(() => [District], { name: 'districts' })
  findAll(@Args() getDistrictArgs: GetDistrictArgs) {
    return this.districtService.findAll(getDistrictArgs);
  }

  @Query(() => District, { name: 'district', nullable: true })
  findOne(@Args('id') id: number) {
    return this.districtService.findOne(id);
  }

  @Mutation(() => District)
  updateDistrict(
    @Args('updateDistrictInput') updateDistrictInput: UpdateDistrictInput,
  ) {
    return this.districtService.update(
      updateDistrictInput.id,
      updateDistrictInput,
    );
  }

  @Mutation(() => District)
  removeDistrict(@Args('id') id: number) {
    return this.districtService.remove(id);
  }

  @ResolveField(() => City)
  city(@Parent() district: District) {
    return this.cityService.findOne(district.cityId);
  }
}
