import { CreateKecamatanInput } from './create-kecamatan.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKecamatanInput extends PartialType(CreateKecamatanInput) {}
