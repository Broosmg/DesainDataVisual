import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@InputType()
@Entity({ name: 'city' })
export class CreateCityInput implements BaseInputInterface {
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
