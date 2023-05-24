import { ArgsType } from '@nestjs/graphql';
import { Province } from '../entities/province.entity';
import { BaseArgs } from 'src/class/dto/base.args/base.args';

@ArgsType()
export class GetProvinceArgs extends Province implements BaseArgs {
  query: string;
  startAt: Date;
  endAt: Date;
}
