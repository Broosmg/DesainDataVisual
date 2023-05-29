import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { CreateLocationInput } from './create-location.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateLocationInput
  extends PartialType(CreateLocationInput)
  implements BaseInputInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'location_id' })
  id: number;
}
