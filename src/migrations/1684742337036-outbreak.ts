import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Outbreak1684742337036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'outbreak',
        columns: [
          {
            name: 'outbreak_id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'outbreak_category_id',
            type: 'bigint',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('outbreak');
  }
}
