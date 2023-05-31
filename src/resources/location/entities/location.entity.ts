import { ObjectType, Field } from '@nestjs/graphql';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'location' })
export class Location extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'location_id' })
  id: number;

  @Field()
  @Column({ name: 'district_id' })
  districtId: number;

  @Field()
  @Column({ type: 'double precision' })
  latitude: number;

  @Field()
  @Column({ type: 'double precision' })
  longitude: number;
}
