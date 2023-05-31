import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/class/entities/base.entity/base.entity';
import { BaseInterface } from 'src/interfaces/base/base.interface';
import { District } from 'src/resources/district/entities/district.entity';
import { OutbreakCategory } from 'src/resources/outbreak-category/entities/outbreak-category.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'outbreak' })
export class Outbreak extends BaseEntity implements BaseInterface {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'outbreak_id' })
  id: string;

  @Field()
  @Column({ name: 'outbreak_category_id' })
  outbreakCategoryId: string;

  @Field()
  outbreakCategory: OutbreakCategory;

  @Field()
  @Column()
  sufferer: number;

  @Field()
  @Column()
  dead: number;

  @Field()
  @Column({ name: 'district_id' })
  districtId: number;

  @Field()
  district: District;
}
