import { Migration } from '@mikro-orm/migrations';

export class Migration20241230173726 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "click" ("id" serial primary key, "created_at" timestamptz not null);`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "click" cascade;`);
  }
}
