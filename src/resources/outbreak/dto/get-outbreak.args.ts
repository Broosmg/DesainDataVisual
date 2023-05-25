import { ArgsType, Field } from '@nestjs/graphql';
import { BaseArgs } from 'src/class/dto/base.args/base.args';

@ArgsType()
export class GetOutbreakArgs extends BaseArgs {
  @Field({ nullable: true })
  outbreakCategoryId: string;

  @Field({ nullable: true })
  outbreakLevelId: string;

  @Field({ nullable: true })
  districtId: number;
}
