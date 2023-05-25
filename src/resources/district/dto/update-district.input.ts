import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateDistrictInput } from './create-district.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDistrictInput
  extends PartialType(CreateDistrictInput)
  implements BaseInputInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'district_id' })
  id: number;
}
