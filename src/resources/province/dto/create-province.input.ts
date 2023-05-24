import { InputType, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateProvinceInput {
  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;
}
