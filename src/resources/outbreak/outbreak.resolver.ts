import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { OutbreakService } from './outbreak.service';
import { Outbreak } from './entities/outbreak.entity';
import { CreateOutbreakInput } from './dto/create-outbreak.input';
import { UpdateOutbreakInput } from './dto/update-outbreak.input';
import { GetOutbreakArgs } from './dto/get-outbreak.args';
import { OutbreakCategory } from '../outbreak-category/entities/outbreak-category.entity';
import { OutbreakCategoryService } from '../outbreak-category/outbreak-category.service';
import { OutbreakLevel } from '../outbreak-level/entities/outbreak-level.entity';
import { OutbreakLevelService } from '../outbreak-level/outbreak-level.service';
import { DistrictService } from '../district/district.service';
import { District } from '../district/entities/district.entity';

@Resolver(() => Outbreak)
export class OutbreakResolver {
  constructor(
    private readonly outbreakService: OutbreakService,
    private readonly districtService: DistrictService,
    private readonly outbreakCategoryService: OutbreakCategoryService,
    private readonly outbreakLevelService: OutbreakLevelService,
  ) {}

  @Mutation(() => Outbreak)
  createOutbreak(
    @Args('createOutbreakInput') createOutbreakInput: CreateOutbreakInput,
  ) {
    return this.outbreakService.create(createOutbreakInput);
  }

  @Query(() => [Outbreak], { name: 'outbreaks' })
  findAll(@Args() getOutbreakArgs: GetOutbreakArgs) {
    return this.outbreakService.findAll(getOutbreakArgs);
  }

  @Query(() => Outbreak, { name: 'outbreak', nullable: true })
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

  @ResolveField(() => District)
  district(@Parent() outbreak: Outbreak) {
    return this.districtService.findOne(outbreak.districtId);
  }

  @ResolveField(() => OutbreakCategory)
  outbreakCategory(@Parent() outbreak: Outbreak) {
    return this.outbreakCategoryService.findOne(outbreak.outbreakCategoryId);
  }

  @ResolveField(() => OutbreakLevel)
  outbreakLevel(@Parent() outbreak: Outbreak) {
    return this.outbreakLevelService.findOne(outbreak.outbreakLevelId);
  }
}
