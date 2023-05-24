import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends BaseEntity {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn({ name: 'province_id' })
  provinceId: number;

  @Field({ nullable: true })
  @Column({ name: 'province_name' })
  provinceName: string;
}
