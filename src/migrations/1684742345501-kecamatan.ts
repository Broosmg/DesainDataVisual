import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Kecamatan1684742345501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'kecamatan',
        columns: [
          {
            name: 'kecamatan_id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'kecamatan_name',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'city_id',
            type: 'uuid',
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
      'CREATE INDEX kecamatan_idx ON public.kecamatan (kecamatan_name, city_id)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('kecamatan');
  }
}
