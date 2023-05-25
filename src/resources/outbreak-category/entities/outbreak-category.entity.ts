import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak_category' })
export class OutbreakCategory
  extends BaseEntity
  implements BaseEntityInterface
{
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_category_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_name' })
  outbreakCategoryName: string;
}
