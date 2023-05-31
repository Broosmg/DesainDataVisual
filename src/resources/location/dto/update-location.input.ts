import { BaseInterface } from 'src/interfaces/base/base.interface';
import { CreateLocationInput } from './create-location.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateLocationInput
  extends PartialType(CreateLocationInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'location_id' })
  id: number;
}
