import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'city' })
export class CreateCityInput {
  @Field()
  @Column({ name: 'province_id' })
  provinceId: number;

  @Field()
  @Column({ name: 'city_name' })
  cityName: string;
}
