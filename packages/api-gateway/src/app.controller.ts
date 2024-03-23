import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs'
import { Order } from './app.interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/heroes')
  async getHeroes(): Promise<Observable<any>> {
    return await this.appService.getHero()
  }

  @Get('/orders/grpc')
  async getOrdersByGRPC(): Promise<Observable<any>> {
    return await this.appService.getOrdersByGRPC()
  }

  @Get('/orders/rest')
  async getOrdersByRest(): Promise<Order[]> {
    return await this.appService.getOrdersByRest()
  }

  @Get('/orders/graphql')
  async getOrdersByGraphQL(): Promise<Order[]> {
    return await this.appService.getOrdersByGraphQL()
  }
}
