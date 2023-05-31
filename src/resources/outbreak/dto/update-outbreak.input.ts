import { BaseInterface } from 'src/interfaces/base/base.interface';
import { CreateOutbreakInput } from './create-outbreak.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateOutbreakInput
  extends PartialType(CreateOutbreakInput)
  implements BaseInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'outbreak_id' })
  id: number;
}
