import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@ObjectType()
@InputType()
export class BaseEntity {
  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
