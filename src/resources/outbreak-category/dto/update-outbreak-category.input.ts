import { CreateOutbreakCategoryInput } from './create-outbreak-category.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOutbreakCategoryInput extends PartialType(
  CreateOutbreakCategoryInput,
) {}
