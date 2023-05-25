import { CreateOutbreakLevelInput } from './create-outbreak-level.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOutbreakLevelInput extends PartialType(
  CreateOutbreakLevelInput,
) {}
