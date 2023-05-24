import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { Column, PrimaryColumn } from 'typeorm';

@ObjectType()
export class City extends BaseEntity {
  @Field()
  @PrimaryColumn('uuid', { name: 'city_id' })
  cityId: string;

  @Field()
  @Column({ name: 'city_name' })
  cityName: string;

  @Field()
  @Column({ name: 'province_id' })
  provinceId: string;
}
