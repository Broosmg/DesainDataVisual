import { InputType, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateProvinceInput } from './create-province.input';

@InputType()
export class UpdateProvinceInput extends CreateProvinceInput {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'province_id' })
  provinceId: string;
}
