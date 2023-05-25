import { InputType, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateDistrictInput {
  @Field()
  @Column({ name: 'city_id' })
  cityId: number;

  @Field()
  @Column({ name: 'kecamatan_name' })
  kecamatanName: string;
}
