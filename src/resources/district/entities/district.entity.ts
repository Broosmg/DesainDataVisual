import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { City } from 'src/resources/city/entities/city.entity';
import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class District extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'kecamatan_id' })
  id: number;

  @Field()
  @Column({ name: 'city_id' })
  cityId: number;

  @Field()
  City: City;

  @Field()
  @Column({ name: 'kecamatan_name' })
  kecamatanName: string;
}
