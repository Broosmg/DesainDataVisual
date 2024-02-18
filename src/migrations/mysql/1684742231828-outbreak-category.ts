import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class OutbreakCategory1684742231828 implements MigrationInterface {
  public async up(queryRunner: QueryRunner) {
    const categories = [
      {
        id: '273ae965-761e-446e-b11c-310df7783a8a',
        name: 'DBD',
      },
      {
        id: '625b981a-09ea-4328-bd2c-4295df14e932',
        name: 'Stunting',
      },
      {
        id: 'e089ad6b-e03e-4ab5-8c6a-5ce65455e713',
        name: 'Covid-19',
      },
      {
        id: '75fcc9a4-3e65-4e35-a208-c761155458c0',
        name: 'TB',
      },
    ];

    await queryRunner.createTable(
      new Table({
        name: 'outbreak_category',
        columns: [
          {
            name: 'outbreak_category_id',
            type: 'binary',
            length: '36',
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
      'CREATE INDEX outbreak_category_idx ON outbreak_category (outbreak_category_name)',
    );

    for (const iterator of categories) {
      await queryRunner.query(
        `INSERT INTO outbreak_category (outbreak_category_id, outbreak_category_name) VALUES ('${iterator.id}', '${iterator.name}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner) {
    await queryRunner.dropTable('outbreak_category');
  }
}
