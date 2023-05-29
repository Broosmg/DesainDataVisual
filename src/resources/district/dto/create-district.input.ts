import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'district' })
export class CreateDistrictInput {
  @Field()
  @Column({ name: 'city_id' })
  cityId: number;

  @Field()
  @Column({ name: 'district_name' })
  name: string;
}
