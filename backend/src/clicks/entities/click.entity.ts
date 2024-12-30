import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Click {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();
}
