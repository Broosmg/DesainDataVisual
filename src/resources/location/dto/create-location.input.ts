import { ConfigService } from '@nestjs/config';
import { InputType, Field } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import 'dotenv/config';

const coordinateType =
  (new ConfigService().get('DB_ENGINE') || 'postgre') == 'postgre'
    ? 'double precision'
    : 'double';

@InputType()
@Entity({ name: 'location' })
export class CreateLocationInput {
  @Field()
  @Column({ name: 'district_id' })
  districtId: number;

  @Field()
  @Column({ type: coordinateType })
  latitude: number;

  @Field()
  @Column({ type: coordinateType })
  longitude: number;
}
