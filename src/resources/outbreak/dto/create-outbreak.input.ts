import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@InputType()
@Entity({ name: 'outbreak' })
export class CreateOutbreakInput implements BaseInputInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_category_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_id' })
  outbreakCategoryId: string;

  @Field()
  @Column({ name: 'outbreak_level_id' })
  outbreakLevelId: string;

  @Field()
  @Column({ name: 'latitude' })
  latitude: number;

  @Field()
  @Column({ name: 'longitude' })
  longitude: number;

  @Field()
  @Column({ name: 'radius' })
  radius: number;

  @Field()
  @Column({ name: 'kelurahan_id' })
  kelurahanId: string;

  constructor() {
    this.id = randomUUID();
  }
}
