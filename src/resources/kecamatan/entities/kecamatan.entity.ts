import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Kecamatan {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
