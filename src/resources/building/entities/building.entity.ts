import { ObjectType, Field } from '@nestjs/graphql';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { BuildingType } from 'src/resources/building-type/entities/building-type.entity';
import { District } from 'src/resources/district/entities/district.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity({ name: 'building' })
export class Building extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'building_id' })
  id: string;

  @Field()
  @Column({ name: 'building_name' })
  name: string;

  @Field()
  @Column({ name: 'building_type_id' })
  typeId: string;

  @Field()
  buildingType: BuildingType;

  @Field()
  @Column({ name: 'district_id' })
  districtId: number;

  @Field()
  district: District;

  @Field()
  @Column({ type: 'double precision' })
  latitude: number;

  @Field()
  @Column({ type: 'double precision' })
  longitude: number;
}
