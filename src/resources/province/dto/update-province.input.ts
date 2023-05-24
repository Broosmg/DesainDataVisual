import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProvinceInput } from './create-province.input';

@InputType()
export class UpdateProvinceInput extends PartialType(CreateProvinceInput) {}
