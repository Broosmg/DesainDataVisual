import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { PrimaryColumn, Column } from 'typeorm';

@InputType()
export class CreateKecamatanInput {
  @Field()
  @PrimaryColumn('uuid', { name: 'kecamatan_id' })
  kecamatanId: string;

  @Field()
  @Column({ name: 'kecamatan_name' })
  kecamatanName: string;

  @Field()
  @Column({ name: 'city_id' })
  cityId: string;

  constructor() {
    this.kecamatanId = randomUUID();
  }
}
