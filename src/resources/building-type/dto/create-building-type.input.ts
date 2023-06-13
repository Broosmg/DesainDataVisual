import { InputType, Field } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';

@InputType()
@Entity({ name: 'building_type' })
export class CreateBuildingTypeInput {
  @Field()
  @Column({ name: 'building_type_name' })
  name: string;
}
