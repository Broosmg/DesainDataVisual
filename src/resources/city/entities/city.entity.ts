import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { Province } from 'src/resources/province/entities/province.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'city' })
export class City extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryGeneratedColumn('increment', { name: 'city_id' })
  id: number;

  @Field()
  @Column({ name: 'province_id' })
  provinceId: number;

  @Field()
  province: Province;

  @Field()
  @Column({ name: 'city_name' })
  name: string;
}
