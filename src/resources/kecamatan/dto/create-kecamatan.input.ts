import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateKecamatanInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
