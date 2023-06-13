import { ObjectType, Field } from '@nestjs/graphql';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { Column, BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'location' })
export class Location extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'location_id' })
  id: string;

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
