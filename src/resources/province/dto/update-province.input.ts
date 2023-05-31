import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateProvinceInput } from './create-province.input';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateProvinceInput
  extends PartialType(CreateProvinceInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'province_id' })
  id: number;
}
