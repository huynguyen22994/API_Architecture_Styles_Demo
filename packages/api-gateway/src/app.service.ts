import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Observable, map, firstValueFrom, catchError } from 'rxjs';
import { HeroesService, Hero } from './common/interfaces/hero.interface'
import { Order, OrderService } from './common/interfaces/order.interface'
import { join } from 'path';
import { AxiosError, AxiosResponse } from 'axios';
import { apolloClient } from './helper/apollo.client'
import { gql } from '@apollo/client/core'

@Injectable()
export class AppService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: ['hero', 'order'],
      protoPath: [join(__dirname, './protos/hero.proto'), join(__dirname, './protos/order.proto')]
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

  async getOrdersByGraphQL(): Promise<Order[]> {
   const query = gql`
    query {
      findOrders {
        id
        customerName
      }
    }
   `
   const { data } = await apolloClient.query({ query })
   return data
  }

  async getHero(): Promise<Observable<Hero>> {
    return this.heroesService.findOne({ id: 1 }).pipe(
      map((data: any) => {
        data.extraData = 'adding extra data'
       return data
      })
    )
  }
}