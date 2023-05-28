import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { City } from 'src/resources/city/entities/city.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'district' })
export class District extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'district_id' })
  id: number;

  @Field()
  @Column({ name: 'city_id' })
  cityId: number;

  @Field()
  city: City;

  @Field()
  @Column({ name: 'district_name' })
  name: string;

  @Field()
  @Column({ type: 'double precision' })
  latitude: number;

  @Field()
  @Column({ type: 'double precision' })
  longitude: number;
}
