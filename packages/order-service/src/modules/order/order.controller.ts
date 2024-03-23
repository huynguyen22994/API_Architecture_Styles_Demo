import { Controller, Get } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js'
import { OrderService } from './order.service'
import { Order} from './order.interfaces'

@Controller()
export class OrderController {
    constructor(private orderService: OrderService) {}

    @GrpcMethod('OrderService', 'findOrders')
    findOrders(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Record<string, Order[]> {
        const orders = this.orderService.findOrders()
        return { orders: orders }
    }

    @Get('/orders')
    getOrders() {
        return this.orderService.findOrders()
    }
}