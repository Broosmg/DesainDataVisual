import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class OutbreakLevel1684742323972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const levels = [
      {
        id: '81e896e1-32bc-46c5-95ba-91dde0a0580f',
        name: 'Level 1',
        color: '#ffff00',
      },
      {
        id: 'f1b919f0-f0df-4a49-abff-7e59be8c2994',
        name: 'Level 2',
        color: '#ffa500',
      },
      {
        id: '6b3c7435-4089-456a-bd63-95bb74c2bec2',
        name: 'Level 3',
        color: '#ff0000',
      },
    ];

    await queryRunner.createTable(
      new Table({
        name: 'outbreak_level',
        columns: [
          {
            name: 'outbreak_level_id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'outbreak_level_name',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'indicator_color',
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
      'CREATE INDEX outbreak_level_idx ON public.outbreak_level (outbreak_level_name)',
    );

    for (const iterator of levels) {
      await queryRunner.query(
        `INSERT INTO public.outbreak_level VALUES ('${iterator.id}', '${iterator.name}', '${iterator.color}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('outbreak_level');
  }
}
