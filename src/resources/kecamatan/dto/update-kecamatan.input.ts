import { CreateKecamatanInput } from './create-kecamatan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKecamatanInput extends PartialType(CreateKecamatanInput) {
  @Field(() => Int)
  id: number;
}
