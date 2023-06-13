import { ArgsType, Field } from '@nestjs/graphql';
import { BaseArgs } from 'src/class/dto/base.args/base.args';

@ArgsType()
export class GetBuildingArgs extends BaseArgs {
  @Field({ nullable: true })
  typeId: string;

  @Field({ nullable: true })
  districtId: string;
}
