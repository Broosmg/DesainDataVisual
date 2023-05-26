import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { District } from 'src/resources/district/entities/district.entity';
import { OutbreakCategory } from 'src/resources/outbreak-category/entities/outbreak-category.entity';
import { OutbreakLevel } from 'src/resources/outbreak-level/entities/outbreak-level.entity';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak' })
export class Outbreak extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_id' })
  outbreakCategoryId: string;

  @Field()
  outbreakCategory: OutbreakCategory;

  @Field()
  @Column({ name: 'outbreak_level_id' })
  outbreakLevelId: string;

  @Field()
  outbreakLevel: OutbreakLevel;

  @Field()
  @Column({ name: 'latitude' })
  latitude: number;

  @Field()
  @Column({ name: 'longitude' })
  longitude: number;

  @Field()
  @Column({ name: 'radius' })
  radius: number;

  @Field()
  @Column({ name: 'district_id' })
  districtId: number;

  @Field()
  district: District;
}
