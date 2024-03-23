import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Observable, map, firstValueFrom, catchError } from 'rxjs';
import { HeroesService, Hero, Order, OrderService } from './app.interfaces'
import { join } from 'path';
import { AxiosError, AxiosResponse } from 'axios';

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

  constructor(private readonly httpService: HttpService){}

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

  async getOrdersByRest(): Promise<Order[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Order[]>('http://localhost:8002/orders').pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}