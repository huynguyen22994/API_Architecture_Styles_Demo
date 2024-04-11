import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderV2Service } from './order.service';
import { OrderV2Controller } from './order.controller';
import { OrderEntity } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderV2Service],
  controllers: [OrderV2Controller],
})
export class OrderV2Module {}