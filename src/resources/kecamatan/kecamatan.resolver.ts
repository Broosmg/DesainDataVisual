import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KecamatanService } from './kecamatan.service';
import { Kecamatan } from './entities/kecamatan.entity';
import { CreateKecamatanInput } from './dto/create-kecamatan.input';
import { UpdateKecamatanInput } from './dto/update-kecamatan.input';

@Resolver(() => Kecamatan)
export class KecamatanResolver {
  constructor(private readonly kecamatanService: KecamatanService) {}

  @Mutation(() => Kecamatan)
  createKecamatan(@Args('createKecamatanInput') createKecamatanInput: CreateKecamatanInput) {
    return this.kecamatanService.create(createKecamatanInput);
  }

  @Query(() => [Kecamatan], { name: 'kecamatan' })
  findAll() {
    return this.kecamatanService.findAll();
  }

  @Query(() => Kecamatan, { name: 'kecamatan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kecamatanService.findOne(id);
  }

  @Mutation(() => Kecamatan)
  updateKecamatan(@Args('updateKecamatanInput') updateKecamatanInput: UpdateKecamatanInput) {
    return this.kecamatanService.update(updateKecamatanInput.id, updateKecamatanInput);
  }

  @Mutation(() => Kecamatan)
  removeKecamatan(@Args('id', { type: () => Int }) id: number) {
    return this.kecamatanService.remove(id);
  }
}
