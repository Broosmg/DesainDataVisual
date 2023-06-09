import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { BuildingService } from './building.service';
import { Building } from './entities/building.entity';
import { CreateBuildingInput } from './dto/create-building.input';
import { UpdateBuildingInput } from './dto/update-building.input';
import { GetBuildingArgs } from './dto/get-building.args';
import { BuildingTypeService } from '../building-type/building-type.service';
import { BuildingType } from '../building-type/entities/building-type.entity';
import { DistrictService } from '../district/district.service';
import { District } from '../district/entities/district.entity';

@Resolver(() => Building)
export class BuildingResolver {
  constructor(
    private readonly buildingService: BuildingService,
    private readonly buildingTypeService: BuildingTypeService,
    private readonly districtService: DistrictService,
  ) {}

  @Mutation(() => Building)
  createBuilding(
    @Args('createBuildingInput') createBuildingInput: CreateBuildingInput,
  ) {
    return this.buildingService.create(createBuildingInput);
  }

  @Query(() => [Building], { name: 'buildings' })
  findAll(@Args() getBuildingArgs: GetBuildingArgs) {
    return this.buildingService.findAll(getBuildingArgs);
  }

  @Query(() => Building, { name: 'building' })
  findOne(@Args('id') id: string) {
    return this.buildingService.findOne(id);
  }

  @Mutation(() => Building)
  updateBuilding(
    @Args('updateBuildingInput') updateBuildingInput: UpdateBuildingInput,
  ) {
    return this.buildingService.update(
      updateBuildingInput.id,
      updateBuildingInput,
    );
  }

  @Mutation(() => Building)
  removeBuilding(@Args('id') id: string) {
    return this.buildingService.remove(id);
  }

  @Query(() => Number, { name: 'countBuilding' })
  count(@Args() getBuildingArgs: GetBuildingArgs) {
    return this.buildingService.findAll(getBuildingArgs, true);
  }

  @ResolveField(() => BuildingType)
  buildingType(@Parent() building: Building) {
    return this.buildingTypeService.findOne(building.typeId);
  }

  @ResolveField(() => District)
  district(@Parent() building: Building) {
    return this.districtService.findOne(building.districtId);
  }
}
