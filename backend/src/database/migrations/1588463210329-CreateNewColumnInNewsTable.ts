import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class CreateNewColumnInNewsTable1588463210329
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'news',
      new TableColumn({
        name: 'imagem',
        type: 'varchar',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('news', 'imagem');
  }
}
