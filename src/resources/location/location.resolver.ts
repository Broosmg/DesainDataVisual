import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { GetLocationArgs } from './dto/get-location.args';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation(() => Location)
  createLocation(
    @Args('createLocationInput') createLocationInput: CreateLocationInput,
  ) {
    return this.locationService.create(createLocationInput);
  }

  @Query(() => [Location], { name: 'location' })
  findAll(@Args() getLocationArgs: GetLocationArgs) {
    return this.locationService.findAll(getLocationArgs);
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args('id') id: number) {
    return this.locationService.findOne(id);
  }

  @Mutation(() => Location)
  updateLocation(
    @Args('updateLocationInput') updateLocationInput: UpdateLocationInput,
  ) {
    return this.locationService.update(
      updateLocationInput.id,
      updateLocationInput,
    );
  }

  @Mutation(() => Location)
  removeLocation(@Args('id') id: number) {
    return this.locationService.remove(id);
  }
}
