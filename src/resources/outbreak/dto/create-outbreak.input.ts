import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'outbreak' })
export class CreateOutbreakInput {
  @Field()
  @Column({ name: 'outbreak_category_id' })
  outbreakCategoryId: string;

  @Field()
  @Column({ name: 'sufferer' })
  sufferer: number;

  @Field()
  @Column({ name: 'dead' })
  dead: number;

  @Field()
  @Column({ name: 'district_id' })
  districtId: number;
}
