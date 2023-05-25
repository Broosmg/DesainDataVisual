import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateProvinceInput } from './create-province.input';
import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateProvinceInput
  extends PartialType(CreateProvinceInput)
  implements BaseInputInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'province_id' })
  id: number;
}
