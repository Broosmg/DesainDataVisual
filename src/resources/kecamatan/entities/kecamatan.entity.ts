import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { PrimaryColumn, Column } from 'typeorm';

@ObjectType()
export class Kecamatan extends BaseEntity {
  @Field()
  @PrimaryColumn('uuid', { name: 'kecamatan_id' })
  kecamatanId: string;

  @Field()
  @Column({ name: 'kecamatan_name' })
  kecamatanName: string;

  @Field()
  @Column({ name: 'city_id' })
  cityId: string;
}
