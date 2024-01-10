import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Chart {
  @Field()
  month: number;

  @Field()
  sufferer: number;

  @Field()
  dead: number;

  @Field()
  affected: number;
}
