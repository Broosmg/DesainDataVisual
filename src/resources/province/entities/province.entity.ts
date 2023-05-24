import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn({ name: 'province_id' })
  provinceId: number;

  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;
}
