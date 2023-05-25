import { ObjectType, Field } from '@nestjs/graphql';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak_level' })
export class OutbreakLevel {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_level_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_level_name' })
  outbreakLevelName: string;

  @Field()
  @Column({ name: 'indicator_color' })
  indicatorColor: string;
}
