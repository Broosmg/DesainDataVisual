import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends BaseEntity {
  @Field()
  @PrimaryColumn('uuid', { name: 'province_id' })
  provinceId: string;

  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;
}
