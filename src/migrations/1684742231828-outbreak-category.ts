import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class OutbreakCategory1684742231828 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories = ['DBD', 'Stunting', 'Covid-19'];

    await queryRunner.createTable(
      new Table({
        name: 'outbreak_category',
        columns: [
          {
            name: 'outbreak_category_id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'outbreak_category_name',
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
      'CREATE INDEX outbreak_category_idx ON outbreak_category (outbreak_category_name)',
    );

    for (const iterator of categories) {
      await queryRunner.query(
        `INSERT INTO outbreak_category (outbreak_category_name) VALUES ('${iterator}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('outbreak_category');
  }
}
