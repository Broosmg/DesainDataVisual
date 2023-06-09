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
      'CREATE INDEX building_idx ON building (building_name, district_id)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('building');
  }
}
