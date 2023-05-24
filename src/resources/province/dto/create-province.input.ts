import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'province' })
export class CreateProvinceInput {
  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;
}
