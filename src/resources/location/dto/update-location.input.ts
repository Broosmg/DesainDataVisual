import { CreateLocationInput } from './create-location.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { BaseInterface } from 'src/interface/base/base.interface';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateLocationInput
  extends PartialType(CreateLocationInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'location_id' })
  id: string;
}
