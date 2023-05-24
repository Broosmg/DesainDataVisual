import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class City1684742171785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'city',
        columns: [
          {
            name: 'city_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'city_name',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'province_id',
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
      'CREATE INDEX city_idx ON public.city (city_name, province_id)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('city');
  }
}
