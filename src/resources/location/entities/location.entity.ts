import { ConfigService } from '@nestjs/config';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/classes/entities/base.entity/base.entity';
import { BaseInterface } from 'src/interface/base/base.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

const coordinateType =
  (new ConfigService().get('DB_ENGINE') || 'postgre') == 'postgre'
    ? 'double precision'
    : 'double';

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
  @Column({ type: coordinateType })
  latitude: number;

  @Field()
  @Column({ type: coordinateType })
  longitude: number;
}
