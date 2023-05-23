import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProvinceService } from './province.service';
import { Province } from './entities/province.entity';
import { CreateProvinceInput } from './dto/create-province.input';
import { UpdateProvinceInput } from './dto/update-province.input';

@Resolver(() => Province)
export class ProvinceResolver {
  constructor(private readonly provinceService: ProvinceService) {}

  @Mutation(() => Province)
  createProvince(@Args('createProvinceInput') createProvinceInput: CreateProvinceInput) {
    return this.provinceService.create(createProvinceInput);
  }

  @Query(() => [Province], { name: 'province' })
  findAll() {
    return this.provinceService.findAll();
  }

  @Query(() => Province, { name: 'province' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.findOne(id);
  }

  @Mutation(() => Province)
  updateProvince(@Args('updateProvinceInput') updateProvinceInput: UpdateProvinceInput) {
    return this.provinceService.update(updateProvinceInput.id, updateProvinceInput);
  }

  @Mutation(() => Province)
  removeProvince(@Args('id', { type: () => Int }) id: number) {
    return this.provinceService.remove(id);
  }
}
