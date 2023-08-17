import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/classes/entities/base.entity/base.entity';
import { BaseInterface } from 'src/interface/base/base.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'province_id' })
  id: number;

  @Field()
  @Column({ name: 'province_name' })
  name: string;
}
