import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Observable, map } from 'rxjs';
import { HeroesService, Hero, Order, OrderService } from './app.interfaces'
import { join } from 'path';

@Injectable()
export class AppService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: ['hero', 'order'],
      protoPath: [join(__dirname, '../protos/hero.proto'), join(__dirname, '../protos/order.proto')]
    },
  })
  client: ClientGrpc;

  private heroesService: HeroesService;
  private orderService: OrderService;

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
    this.orderService = this.client.getService<OrderService>('OrderService');
  }

  async getHero(): Promise<Observable<Hero>> {
    return this.heroesService.findOne({ id: 1 }).pipe(
      map((data: any) => {
        data.huy = '1'
       return data
      })
    )
  }

  async getOrdersByGRPC(): Promise<Observable<Order>> {
    return this.orderService.findOrders({})
  }

  async getOrdersByRest(): Promise<any> {
    
  }
}