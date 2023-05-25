import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OutbreakLevelService } from './outbreak-level.service';
import { OutbreakLevel } from './entities/outbreak-level.entity';
import { CreateOutbreakLevelInput } from './dto/create-outbreak-level.input';
import { UpdateOutbreakLevelInput } from './dto/update-outbreak-level.input';
import { GetOutbreakLevelArgs } from './dto/get-outbreakLevel.args';

@Resolver(() => OutbreakLevel)
export class OutbreakLevelResolver {
  constructor(private readonly outbreakLevelService: OutbreakLevelService) {}

  @Mutation(() => OutbreakLevel)
  createOutbreakLevel(
    @Args('createOutbreakLevelInput')
    createOutbreakLevelInput: CreateOutbreakLevelInput,
  ) {
    return this.outbreakLevelService.create(createOutbreakLevelInput);
  }

  @Query(() => [OutbreakLevel], { name: 'outbreakLevel' })
  findAll(@Args() getOutbreakLevelArgs: GetOutbreakLevelArgs) {
    return this.outbreakLevelService.findAll(getOutbreakLevelArgs);
  }

  @Query(() => OutbreakLevel, { name: 'outbreakLevel', nullable: true })
  findOne(@Args('id') id: string) {
    return this.outbreakLevelService.findOne(id);
  }

  @Mutation(() => OutbreakLevel)
  updateOutbreakLevel(
    @Args('updateOutbreakLevelInput')
    updateOutbreakLevelInput: UpdateOutbreakLevelInput,
  ) {
    return this.outbreakLevelService.update(
      updateOutbreakLevelInput.id,
      updateOutbreakLevelInput,
    );
  }

  @Mutation(() => OutbreakLevel)
  removeOutbreakLevel(@Args('id') id: string) {
    return this.outbreakLevelService.remove(id);
  }
}
