import { Field } from '@nestjs/graphql';

export class BaseInput {
  @Field()
  id: string;
}
