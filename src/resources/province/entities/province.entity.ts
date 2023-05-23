import { Field, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class Province {
  @PrimaryColumn({ name: 'province_id' })
  provinceId: number;

  @Field({ name: 'province_name' })
  provinceName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: object;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: object;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: object;
}
