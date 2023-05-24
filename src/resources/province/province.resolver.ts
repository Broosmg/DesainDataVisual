import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProvinceService } from './province.service';
import { Province } from './entities/province.entity';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';
import { GetProvinceArgs } from './dto/get-province.args';

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private readonly provinceService: ProvinceService) {}

  @Mutation(() => Province)
  createProvince(
    @Args('createProvinceInput') createProvinceInput: CreateProvinceInput,
  ) {
    return this.provinceService.create(createProvinceInput);
  }

  @Query(() => [Province], { name: 'provinces' })
  findAll(@Args() getProvinceArgs: GetProvinceArgs) {
    return this.provinceService.findAll(getProvinceArgs);
  }

  @Query(() => Province, { name: 'province' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.findOne(id);
  }

  @Mutation(() => Province)
  updateProvince(
    @Args('updateProvinceInput') updateProvinceInput: UpdateProvinceInput,
  ) {
    return this.provinceService.update(
      updateProvinceInput.provinceId,
      updateProvinceInput,
    );
  }

  @Mutation(() => Province)
  removeProvince(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.remove(id);
  }
}
