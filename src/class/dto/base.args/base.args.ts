import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class BaseArgs {
  @Field({ nullable: true })
  query: string;

  @Field({ nullable: true })
  startAt: Date;

  @Field({ nullable: true })
  endAt: Date;

  @Field({ nullable: true })
  offset: number;

  @Field({ nullable: true })
  limit: number;
}
