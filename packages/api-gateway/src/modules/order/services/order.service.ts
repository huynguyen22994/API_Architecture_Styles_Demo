import { Injectable, OnModuleInit } from '@nestjs/common'
import { firstValueFrom, catchError, Observable } from 'rxjs';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Order, OrderService } from './../../../common/interfaces/order.interface'
import { OrderV2, OrderServiceV2 } from './../../../common/interfaces/order.v2.interface'
import { join } from 'path';

@Injectable()
export class OrderServices implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
          package: ['order', 'order2'],
          protoPath: [join(__dirname, '../../../protos/order.proto'), join(__dirname, '../../../protos/order.v2.proto')]
        },
    })
    client: ClientGrpc;

    private orderService: OrderService;
    private orderServiceV2: OrderServiceV2;
    constructor(){}
    onModuleInit() {
        this.orderService = this.client.getService<OrderService>('OrderService');
        this.orderServiceV2 = this.client.getService<OrderServiceV2>('OrderServiceV2')
    }

    async getOrderList(): Promise<OrderV2[]> {
      const { orders } = await firstValueFrom(this.orderServiceV2.findOrders({}).pipe())
      return orders
    }

    async getOrderByCustomerName(customerName: string): Promise<OrderV2> {
      const result = await firstValueFrom(this.orderServiceV2.findOrderByCustomerName({ customerName: customerName }).pipe())
      result.createdAt = new Date()
      return result
    }

    async createOrder(order: OrderV2): Promise<OrderV2> {
      const result = await firstValueFrom(this.orderServiceV2.createOrder(order).pipe())
      return result
    }
}