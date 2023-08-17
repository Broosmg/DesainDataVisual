import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/classes/entities/base.entity/base.entity';
import { BaseInterface } from 'src/interface/base/base.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak_category' })
export class OutbreakCategory extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'outbreak_category_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_name' })
  name: string;
}
