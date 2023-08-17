import { BaseInterface } from 'src/interface/base/base.interface';
import { CreateBuildingTypeInput } from './create-building-type.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateBuildingTypeInput
  extends PartialType(CreateBuildingTypeInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'building_type_id' })
  id: string;
}
