import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CityTop {
  @Field()
  cityName: string;

  @Field()
  affected: number;
}
