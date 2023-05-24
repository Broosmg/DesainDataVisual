import { Field, ObjectType } from '@nestjs/graphql';
import { Base } from 'src/class/entities/base/base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends Base {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn({ name: 'province_id' })
  provinceId: number;

  @Field({ nullable: true })
  @Column({ name: 'province_name' })
  provinceName: string;
}
