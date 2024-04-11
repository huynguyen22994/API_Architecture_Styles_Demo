import { Controller, Get } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js'
import { OrderV2Service } from './order.service'
import { Order} from '../../common/order.interfaces'

@Controller()
export class OrderV2Controller {
    constructor(private orderV2Service: OrderV2Service) {}

    @GrpcMethod('OrderServiceV2', 'findOrders')
    async findOrders(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Record<string, Order[]>> {
        const orders = await this.orderV2Service.findOrders()
        return { orders: orders }
    }
}