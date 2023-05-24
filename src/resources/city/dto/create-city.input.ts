import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@InputType()
@Entity({ name: 'city' })
export class CreateCityInput {
  @Field()
  @PrimaryColumn('uuid', { name: 'city_id' })
  id: string;

  @Field()
  @Column({ name: 'city_name' })
  cityName: string;

  @Field()
  @Column({ name: 'province_id' })
  provinceId: string;

  constructor() {
    this.id = randomUUID();
  }
}
