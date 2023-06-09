import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BuildingType1686282176488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'building_type',
        columns: [
          {
            name: 'building_type_id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'building_type_name',
            type: 'varchar',
            length: '45',
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
      'CREATE INDEX building_type_idx ON building_type (building_type_name)',
    );
    await queryRunner.query(
      `INSERT INTO building_type (building_type_id, building_type_name) VALUES ('38153748-e18c-4fcf-b825-f54322420d2c', 'PUSKESMAS')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('building_type');
  }
}
