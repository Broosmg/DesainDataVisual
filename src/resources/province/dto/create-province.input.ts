import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@InputType()
@Entity({ name: 'province' })
export class CreateProvinceInput {
  @Field()
  @PrimaryColumn('uuid', { name: 'province_id' })
  id: string;

  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;

  constructor() {
    this.id = randomUUID();
  }
}
