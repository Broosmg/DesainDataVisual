import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CreateProvinceInput } from './create-province.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProvinceInput extends CreateProvinceInput {
  @Field()
  @PrimaryGeneratedColumn({ name: 'province_id' })
  provinceId: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Field()
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
