import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { Column, PrimaryColumn } from 'typeorm';

@InputType()
export class CreateCityInput {
  @Field()
  @PrimaryColumn('uuid', { name: 'city_id' })
  cityId: string;

  @Field()
  @Column({ name: 'city_name' })
  cityName: string;

  @Field()
  @Column({ name: 'province_id' })
  provinceId: string;

  constructor() {
    this.provinceId = randomUUID();
  }
}
