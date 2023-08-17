import { BaseInterface } from 'src/interface/base/base.interface';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateDistrictInput } from './create-district.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDistrictInput
  extends PartialType(CreateDistrictInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'district_id' })
  id: number;
}
