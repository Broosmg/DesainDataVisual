import { ArgsType, Field } from '@nestjs/graphql';
import { BaseArgs } from 'src/classes/dto/base.args/base.args';

@ArgsType()
export class GetCityArgs extends BaseArgs {
  @Field({ nullable: true })
  provinceId: string;
}
