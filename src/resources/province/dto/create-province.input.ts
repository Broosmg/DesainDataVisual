import { InputType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';
import { BaseInputInterface } from 'src/interfaces/dto/base.input/base.input.interface';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@InputType()
@Entity({ name: 'province' })
export class CreateProvinceInput implements BaseInputInterface {
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
