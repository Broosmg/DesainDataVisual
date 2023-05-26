import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class OutbreakCategory1684742231828 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories = [
      {
        id: '3d3df896-8a1e-4c12-a35c-fc20d67c9416',
        name: 'DBD',
      },
      {
        id: 'f4af598c-6cb4-4e5b-bf15-da932b3a32af',
        name: 'Stunting',
      },
      {
        id: '97d3c132-2e55-49b3-a538-f87da4569d02',
        name: 'Covid-19',
      },
    ];

    await queryRunner.createTable(
      new Table({
        name: 'outbreak_category',
        columns: [
          {
            name: 'outbreak_category_id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
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
      'CREATE INDEX outbreak_category_idx ON public.outbreak_category (outbreak_category_name)',
    );

    for (const iterator of categories) {
      await queryRunner.query(
        `INSERT INTO public.outbreak_category VALUES ('${iterator.id}', '${iterator.name}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('outbreak_category');
  }
}
