import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Province1684742163082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'province',
        columns: [
          {
            name: 'province_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'province_name',
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
      'CREATE INDEX province_idx ON public.province (province_name)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('province');
  }
}
