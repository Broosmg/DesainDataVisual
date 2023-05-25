import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { City } from 'src/resources/city/entities/city.entity';
import { PrimaryColumn, Column } from 'typeorm';

@ObjectType()
export class Kecamatan extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'kecamatan_id' })
  id: string;

  @Field()
  @Column({ name: 'kecamatan_name' })
  kecamatanName: string;

  @Field()
  @Column({ name: 'city_id' })
  cityId: string;

  @Field()
  City: City;
}
