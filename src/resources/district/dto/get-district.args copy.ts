import { ArgsType } from '@nestjs/graphql';
import { BaseArgs } from 'src/class/dto/base.args/base.args';

@ArgsType()
export class GetDistrictArgs extends BaseArgs {}
