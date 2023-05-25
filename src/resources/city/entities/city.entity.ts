import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { Province } from 'src/resources/province/entities/province.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'city' })
export class City extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'city_id' })
  id: string;

  @Field()
  @Column({ name: 'city_name' })
  cityName: string;

  @Field()
  @Column({ name: 'province_id' })
  provinceId: string;

  @Field(() => Province)
  @ManyToOne(() => Province, (value) => value.cities)
  province: Province;
}
