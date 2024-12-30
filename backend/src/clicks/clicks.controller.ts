import { Controller, Get, Post } from '@nestjs/common';
import { ClicksService } from './clicks.service';

@Controller('clicks')
export class ClicksController {
  constructor(private readonly clicksService: ClicksService) {}

  @Post()
  create() {
    return this.clicksService.create();
  }

  @Get()
  findAll() {
    return this.clicksService.findAll();
  }
}
