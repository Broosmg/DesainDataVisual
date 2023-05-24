import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { Province } from 'src/resources/province/entities/province.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'city' })
export class City extends BaseEntity {
  @Field()
  @PrimaryColumn('uuid', { name: 'city_id' })
  id: string;

  @Field()
  @Column({ name: 'city_name' })
  cityName: string;

  @Field()
  @Column({ name: 'province_id' })
  provinceId: string;

  @Field(() => Province)
  @ManyToOne(() => Province, (value) => value.cities)
  province: Province;
}
