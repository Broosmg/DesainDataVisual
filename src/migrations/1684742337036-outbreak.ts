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
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'outbreak_category_id',
            type: 'uuid',
          },
          {
            name: 'sufferer',
            type: 'bigint',
          },
          {
            name: 'dead',
            type: 'bigint',
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
      'CREATE INDEX outbreak_idx ON outbreak (outbreak_category_id, district_id)',
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
            `INSERT INTO outbreak (outbreak_category_id, sufferer, dead, district_id, created_at) VALUES ('${row.outbreak_category_id}', ${row.sufferer}, ${row.dead}, ${row.district_id}, '${row.created_at}')`,
          );
        }
      });
  }
}
