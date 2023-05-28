import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OutbreakCategoryService } from './outbreak-category.service';
import { OutbreakCategory } from './entities/outbreak-category.entity';
import { CreateOutbreakCategoryInput } from './dto/create-outbreak-category.input';
import { UpdateOutbreakCategoryInput } from './dto/update-outbreak-category.input';
import { GetOutbreakCategoryArgs } from './dto/get-outbreakCategory.args';

@Resolver(() => OutbreakCategory)
export class OutbreakCategoryResolver {
  constructor(
    private readonly outbreakCategoryService: OutbreakCategoryService,
  ) {}

  @Mutation(() => OutbreakCategory)
  createOutbreakCategory(
    @Args('createOutbreakCategoryInput')
    createOutbreakCategoryInput: CreateOutbreakCategoryInput,
  ) {
    return this.outbreakCategoryService.create(createOutbreakCategoryInput);
  }

  @Query(() => [OutbreakCategory], { name: 'outbreakCategories' })
  findAll(@Args() getOutbreakCategoryArgs: GetOutbreakCategoryArgs) {
    return this.outbreakCategoryService.findAll(getOutbreakCategoryArgs);
  }

  @Query(() => OutbreakCategory, { name: 'outbreakCategory', nullable: true })
  findOne(@Args('id') id: number) {
    return this.outbreakCategoryService.findOne(id);
  }

  @Mutation(() => OutbreakCategory)
  updateOutbreakCategory(
    @Args('updateOutbreakCategoryInput')
    updateOutbreakCategoryInput: UpdateOutbreakCategoryInput,
  ) {
    return this.outbreakCategoryService.update(
      updateOutbreakCategoryInput.id,
      updateOutbreakCategoryInput,
    );
  }

  @Mutation(() => OutbreakCategory)
  removeOutbreakCategory(@Args('id') id: number) {
    return this.outbreakCategoryService.remove(id);
  }
}
