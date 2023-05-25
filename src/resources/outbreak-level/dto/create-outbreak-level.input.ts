import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'outbreak_level' })
export class CreateOutbreakLevelInput {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_level_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_level_name' })
  outbreakLevelName: string;

  @Field()
  @Column({ name: 'indicator_color' })
  indicatorColor: string;

  constructor() {
    this.id = randomUUID();
  }
}
