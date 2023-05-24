import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class Province {
  @Field()
  @PrimaryGeneratedColumn({ name: 'province_id' })
  provinceId: number;

  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;

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
