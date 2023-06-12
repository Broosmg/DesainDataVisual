import * as csv from 'csv-parser';
import { createReadStream } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Building1686282187454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'building',
        columns: [
          {
            name: 'building_id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'building_name',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'building_type_id',
            type: 'uuid',
          },
          {
            name: 'district_id',
            type: 'bigint',
          },
          {
            name: 'latitude',
            type: 'double precision',
          },
          {
            name: 'longitude',
            type: 'double precision',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.query(
      'CREATE INDEX building_idx ON building (building_name, building_type_id, district_id)',
    );
    this.csvToDb(join(__dirname, '../../data/building.csv'), queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('building');
  }

  private csvToDb(path: string, queryRunner: QueryRunner) {
    createReadStream(path)
      .pipe(csv())
      .on('data', async (row: any) => {
        if (row) {
          await queryRunner.query(
            `INSERT INTO building (building_name, building_type_id, district_id, latitude, longitude) VALUES ('${row.building_name}', '${row.building_type_id}', ${row.district_id}, ${row.latitude}, ${row.longitude})`,
          );
        }
      });
  }
}
