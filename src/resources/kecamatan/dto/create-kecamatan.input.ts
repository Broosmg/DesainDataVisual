import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { PrimaryColumn, Column } from 'typeorm';

@InputType()
export class CreateKecamatanInput implements BaseInputInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'kecamatan_id' })
  id: string;

  @Field()
  @Column({ name: 'kecamatan_name' })
  kecamatanName: string;

  @Field()
  @Column({ name: 'city_id' })
  cityId: string;

  constructor() {
    this.id = randomUUID();
  }
}
