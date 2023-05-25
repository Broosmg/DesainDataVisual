import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OutbreakService } from './outbreak.service';
import { Outbreak } from './entities/outbreak.entity';
import { CreateOutbreakInput } from './dto/create-outbreak.input';
import { UpdateOutbreakInput } from './dto/update-outbreak.input';
import { GetOutbreakArgs } from './dto/get-outbreak.args';

@Resolver(() => Outbreak)
export class OutbreakResolver {
  constructor(private readonly outbreakService: OutbreakService) {}

  @Mutation(() => Outbreak)
  createOutbreak(
    @Args('createOutbreakInput') createOutbreakInput: CreateOutbreakInput,
  ) {
    return this.outbreakService.create(createOutbreakInput);
  }

  @Query(() => [Outbreak], { name: 'outbreak' })
  findAll(getOutbreakArgs: GetOutbreakArgs) {
    return this.outbreakService.findAll(getOutbreakArgs);
  }

  @Query(() => Outbreak, { name: 'outbreak' })
  findOne(@Args('id') id: string) {
    return this.outbreakService.findOne(id);
  }

  @Mutation(() => Outbreak)
  updateOutbreak(
    @Args('updateOutbreakInput') updateOutbreakInput: UpdateOutbreakInput,
  ) {
    return this.outbreakService.update(
      updateOutbreakInput.id,
      updateOutbreakInput,
    );
  }

  @Mutation(() => Outbreak)
  removeOutbreak(@Args('id') id: string) {
    return this.outbreakService.remove(id);
  }
}
