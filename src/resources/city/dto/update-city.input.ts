import { BaseInterface } from 'src/interfaces/base/base.interface';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateCityInput } from './create-city.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCityInput
  extends PartialType(CreateCityInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'city_id' })
  id: number;
}
