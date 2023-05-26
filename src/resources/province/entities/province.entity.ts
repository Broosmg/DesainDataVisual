import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'province_id' })
  id: number;

  @Field()
  @Column({ name: 'province_name' })
  name: string;
}
