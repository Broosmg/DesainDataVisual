import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'outbreak_level' })
export class CreateOutbreakLevelInput implements BaseInputInterface {
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
