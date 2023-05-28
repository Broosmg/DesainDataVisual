import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak_category' })
export class OutbreakCategory
  extends BaseEntity
  implements BaseEntityInterface
{
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'outbreak_category_id' })
  id: number;

  @Field()
  @Column({ name: 'outbreak_category_name' })
  name: string;
}
