import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs'
import { Order } from './common/interfaces/order.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
