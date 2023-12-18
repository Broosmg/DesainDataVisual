import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetChartArgs {
  @Field({ nullable: true })
  outbreakCategoryId: string;

  @Field()
  year: string;
}
