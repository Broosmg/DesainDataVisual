import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak_category' })
export class OutbreakCategory extends BaseEntity {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_category_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_name' })
  outbreakCategoryName: string;
}
