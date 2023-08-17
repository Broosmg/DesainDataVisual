import { BaseInterface } from 'src/interface/base/base.interface';
import { CreateBuildingInput } from './create-building.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateBuildingInput
  extends PartialType(CreateBuildingInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'building_id' })
  id: string;
}
