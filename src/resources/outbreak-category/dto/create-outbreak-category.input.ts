import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'outbreak_category' })
export class CreateOutbreakCategoryInput {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_category_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_name' })
  outbreakCategoryName: string;

  constructor() {
    this.id = randomUUID();
  }
}
