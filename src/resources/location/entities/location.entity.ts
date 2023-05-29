import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'location' })
export class Location extends BaseEntity implements BaseEntityInterface {
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
