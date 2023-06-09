import { ObjectType, Field } from '@nestjs/graphql';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity({ name: 'building_type' })
export class BuildingType extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'building_type_id' })
  id: string;

  @Field()
  @Column({ name: 'building_type_name' })
  name: string;
}
