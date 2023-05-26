import { randomUUID } from 'crypto';
import * as csv from 'csv-parser';
import { createReadStream } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Outbreak1684742337036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'outbreak',
        columns: [
          {
            name: 'outbreak_id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'outbreak_category_id',
            type: 'uuid',
          },
          {
            name: 'outbreak_level_id',
            type: 'uuid',
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
            name: 'radius',
            type: 'double precision',
          },
          {
            name: 'district_id',
            type: 'bigint',
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
      'CREATE INDEX outbreak_idx ON public.outbreak (outbreak_category_id, outbreak_level_id)',
    );
    this.csvToDb(join(__dirname, '../../data/outbreak/dbd.csv'), queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('outbreak');
  }

  private csvToDb(path: string, queryRunner: QueryRunner) {
    createReadStream(path)
      .pipe(csv())
      .on('data', async (row: any) => {
        if (row) {
          await queryRunner.query(
            `INSERT INTO outbreak VALUES ('${randomUUID()}', '${
              row.outbreak_category_id
            }', '${row.outbreak_level_id}', ${row.latitude}, ${
              row.longitude
            }, ${row.radius}, ${row.district_id})`,
          );
        }
      });
  }
}
