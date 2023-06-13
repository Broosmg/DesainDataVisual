import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BuildingTypeService } from './building-type.service';
import { BuildingType } from './entities/building-type.entity';
import { CreateBuildingTypeInput } from './dto/create-building-type.input';
import { UpdateBuildingTypeInput } from './dto/update-building-type.input';
import { GetBuildingTypeArgs } from './dto/get-building-type.args';

@Resolver(() => BuildingType)
export class BuildingTypeResolver {
  constructor(private readonly buildingTypeService: BuildingTypeService) {}

  @Mutation(() => BuildingType)
  createBuildingType(
    @Args('createBuildingTypeInput')
    createBuildingTypeInput: CreateBuildingTypeInput,
  ) {
    return this.buildingTypeService.create(createBuildingTypeInput);
  }

  @Query(() => [BuildingType], { name: 'buildingTypes' })
  findAll(@Args() getBuildingTypeArgs: GetBuildingTypeArgs) {
    return this.buildingTypeService.findAll(getBuildingTypeArgs);
  }

  @Query(() => BuildingType, { name: 'buildingType' })
  findOne(@Args('id') id: string) {
    return this.buildingTypeService.findOne(id);
  }

  @Mutation(() => BuildingType)
  updateBuildingType(
    @Args('updateBuildingTypeInput')
    updateBuildingTypeInput: UpdateBuildingTypeInput,
  ) {
    return this.buildingTypeService.update(
      updateBuildingTypeInput.id,
      updateBuildingTypeInput,
    );
  }

  @Mutation(() => BuildingType)
  removeBuildingType(@Args('id') id: string) {
    return this.buildingTypeService.remove(id);
  }

  @Query(() => Number, { name: 'countBuildingType' })
  count(@Args() getBuildingTypeArgs: GetBuildingTypeArgs) {
    return this.buildingTypeService.findAll(getBuildingTypeArgs, true);
  }
}
