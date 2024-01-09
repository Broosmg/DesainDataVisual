import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CityTop {
  @Field()
  cityName: string;

  @Field()
  dead: number;

  @Field()
  sufferer: number;

  @Field()
  affected: number;
}
