import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { CreateOutbreakCategoryInput } from './create-outbreak-category.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UpdateOutbreakCategoryInput
  extends PartialType(CreateOutbreakCategoryInput)
  implements BaseInputInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'outbreak_category_id' })
  id: number;
}
