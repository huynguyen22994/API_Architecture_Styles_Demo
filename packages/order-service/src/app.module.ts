import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './hero/heroes.controller'
import { OrderModule } from './modules/order/order.module'

@Module({
  imports: [OrderModule],
  controllers: [AppController, HeroesController],
  providers: [AppService],
})
export class AppModule {}
