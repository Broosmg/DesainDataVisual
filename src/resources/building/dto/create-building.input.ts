import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'building' })
export class CreateBuildingInput {
  @Field()
  @Column({ name: 'building_name' })
  name: string;

  @Field()
  @Column({ name: 'building_type_id' })
  typeId: string;

  @Field()
  @Column({ name: 'district_id' })
  districtId: number;

  @Field()
  @Column({ type: 'double precision' })
  latitude: number;

  @Field()
  @Column({ type: 'double precision' })
  longitude: number;
}
