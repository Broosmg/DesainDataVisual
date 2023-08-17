import { ArgsType, Field } from '@nestjs/graphql';
import { BaseArgs } from 'src/classes/dto/base.args/base.args';

@ArgsType()
export class GetLocationArgs extends BaseArgs {
  @Field({ nullable: true })
  districtId: string;
}
