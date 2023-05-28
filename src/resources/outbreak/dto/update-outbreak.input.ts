import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { CreateOutbreakInput } from './create-outbreak.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateOutbreakInput
  extends PartialType(CreateOutbreakInput)
  implements BaseInputInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'outbreak_id' })
  id: number;
}
