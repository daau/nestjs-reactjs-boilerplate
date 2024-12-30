import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';
import { Click } from './entities/click.entity';

@Injectable()
export class ClicksService {
  constructor(private readonly em: EntityManager) {}

  create() {
    const click = new Click();
    this.em.persistAndFlush(click);
    return click;
  }

  findAll() {
    return this.em.findAll(Click);
  }
}
