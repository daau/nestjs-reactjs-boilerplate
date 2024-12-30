import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ClicksModule } from './clicks/clicks.module';
import config from './mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(config), ClicksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
