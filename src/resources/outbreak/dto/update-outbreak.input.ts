import { CreateOutbreakInput } from './create-outbreak.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOutbreakInput extends PartialType(CreateOutbreakInput) {}
