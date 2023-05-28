import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'outbreak_category' })
export class CreateOutbreakCategoryInput {
  @Field()
  @Column({ name: 'outbreak_category_name' })
  name: string;
}
