import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { City } from 'src/resources/city/entities/city.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'province' })
export class Province extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'province_id' })
  id: string;

  @Field()
  @Column({ name: 'province_name' })
  provinceName: string;

  @Field(() => [City], { nullable: true })
  @OneToMany(() => City, (value) => value.province)
  cities: City[];
}
