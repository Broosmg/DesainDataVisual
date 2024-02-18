import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddForeignKey1708264981788 implements MigrationInterface {
  public async up(queryRunner: QueryRunner) {
    const queries = [
      'ALTER TABLE city ADD CONSTRAINT city_province_fk FOREIGN KEY (province_id) REFERENCES province(province_id)',
      'ALTER TABLE district ADD CONSTRAINT district_city_fk FOREIGN KEY (city_id) REFERENCES city(city_id)',
      'ALTER TABLE outbreak ADD CONSTRAINT outbreak_outbreak_category_fk FOREIGN KEY (outbreak_category_id) REFERENCES outbreak_category(outbreak_category_id)',
      'ALTER TABLE outbreak ADD CONSTRAINT outbreak_district_fk FOREIGN KEY (district_id) REFERENCES district(district_id)',
      'ALTER TABLE location ADD CONSTRAINT location_district_fk FOREIGN KEY (district_id) REFERENCES district(district_id)',
    ];

    for (const iterator of queries) {
      await queryRunner.query(iterator);
    }
  }

  public async down(queryRunner: QueryRunner) {
    //
  }
}
