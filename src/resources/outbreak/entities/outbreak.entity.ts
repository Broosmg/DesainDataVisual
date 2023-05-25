import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseEntityInterface } from 'src/interfaces/entities/base.entity/base.entity.interface';
import { Kecamatan } from 'src/resources/kecamatan/entities/kecamatan.entity';
import { OutbreakCategory } from 'src/resources/outbreak-category/entities/outbreak-category.entity';
import { OutbreakLevel } from 'src/resources/outbreak-level/entities/outbreak-level.entity';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak' })
export class Outbreak extends BaseEntity implements BaseEntityInterface {
  @Field()
  @PrimaryColumn('uuid', { name: 'outbreak_category_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_id' })
  outbreakCategoryId: string;

  @Field()
  @Column({ name: 'outbreak_level_id' })
  outbreakLevelId: string;

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
  @Column({ name: 'kecamatan_id' })
  kecamatanId: string;

  @Field()
  outbreakCategory: OutbreakCategory;

  @Field()
  outbreakLevel: OutbreakLevel;

  @Field()
  kecamatan: Kecamatan;
}
