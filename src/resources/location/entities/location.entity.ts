import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
export class Location extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'location_id' })
  id: number;

  @Field()
  @Column({ type: 'double precision' })
  latitude: number;

  @Field()
  @Column({ type: 'double precision' })
  longitude: number;
}
