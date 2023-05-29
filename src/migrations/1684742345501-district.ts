import { readFileSync } from 'fs';
import { join } from 'path';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class District1684742345501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'district',
        columns: [
          {
            name: 'district_id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'city_id',
            type: 'bigint',
          },
          {
            name: 'district_name',
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
    await queryRunner.query(
      'CREATE INDEX district_idx ON district (district_name, city_id)',
    );
    await queryRunner.query(
      readFileSync(join(__dirname, '../../data/district.sql')).toString(),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('district');
  }
}
