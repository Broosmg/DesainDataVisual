import * as csv from 'csv-parser';
import { createReadStream } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class City1684742171785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'city',
        columns: [
          {
            name: 'city_id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'province_id',
            type: 'bigint',
          },
          {
            name: 'city_name',
            type: 'varchar',
            length: '255',
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
    await queryRunner.query('CREATE INDEX city_idx ON city (city_name)');
    this.csvToDb(join(__dirname, '../../data/city.csv'), queryRunner);
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable('city');
  }

  private csvToDb(path: string, queryRunner: QueryRunner) {
    createReadStream(path)
      .pipe(csv())
      .on('data', (row: any) => {
        if (row) {
          queryRunner.query(
            `INSERT INTO city (city_id, province_id, city_name) VALUES (${row.city_id}, ${row.province_id}, '${row.city_name}')`,
          );
        }
      });
  }
}
