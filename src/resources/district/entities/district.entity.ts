import { ObjectType, Field } from '@nestjs/graphql';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { City } from 'src/resources/city/entities/city.entity';
import { Location } from 'src/resources/location/entities/location.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'district' })
export class District extends BaseEntity implements BaseInterface {
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

  @Field(() => [Location])
  locations: Location[];
}
