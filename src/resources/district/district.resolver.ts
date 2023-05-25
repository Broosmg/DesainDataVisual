import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DistrictService } from './district.service';
import { District } from './entities/district.entity';
import { CreateDistrictInput } from './dto/create-district.input';
import { UpdateDistrictInput } from './dto/update-district.input';
import { GetDistrictArgs } from './dto/get-district.args copy';

@Resolver(() => District)
export class DistrictResolver {
  constructor(private readonly districtService: DistrictService) {}

  @Mutation(() => District)
  createDistrict(
    @Args('createDistrictInput') createDistrictInput: CreateDistrictInput,
  ) {
    return this.districtService.create(createDistrictInput);
  }

  @Query(() => [District], { name: 'districts' })
  findAll(getDistrictArgs: GetDistrictArgs) {
    return this.districtService.findAll(getDistrictArgs);
  }

  @Query(() => District, { name: 'district' })
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
}
