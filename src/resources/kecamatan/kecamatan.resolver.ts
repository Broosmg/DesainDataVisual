import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { KecamatanService } from './kecamatan.service';
import { Kecamatan } from './entities/kecamatan.entity';
import { CreateKecamatanInput } from './dto/create-kecamatan.input';
import { UpdateKecamatanInput } from './dto/update-kecamatan.input';
import { GetKecamatanArgs } from './dto/get-kecamatan.args';
import { CityService } from '../city/city.service';
import { City } from '../city/entities/city.entity';

@Resolver(() => Kecamatan)
export class KecamatanResolver {
  constructor(
    private readonly kecamatanService: KecamatanService,
    private readonly cityService: CityService,
  ) {}

  @Mutation(() => Kecamatan)
  createKecamatan(
    @Args('createKecamatanInput') createKecamatanInput: CreateKecamatanInput,
  ) {
    return this.kecamatanService.create(createKecamatanInput);
  }

  @Query(() => [Kecamatan], { name: 'kecamatans' })
  findAll(getKecamatanArgs: GetKecamatanArgs) {
    return this.kecamatanService.findAll(getKecamatanArgs);
  }

  @Query(() => Kecamatan, { name: 'kecamatan' })
  findOne(@Args('id') id: string) {
    return this.kecamatanService.findOne(id);
  }

  @Mutation(() => Kecamatan)
  updateKecamatan(
    @Args('updateKecamatanInput') updateKecamatanInput: UpdateKecamatanInput,
  ) {
    return this.kecamatanService.update(
      updateKecamatanInput.id,
      updateKecamatanInput,
    );
  }

  @Mutation(() => Kecamatan)
  removeKecamatan(@Args('id') id: string) {
    return this.kecamatanService.remove(id);
  }

  @ResolveField(() => City)
  city(@Parent() kecamatan: Kecamatan) {
    return this.cityService.findOne(kecamatan.cityId);
  }
}
