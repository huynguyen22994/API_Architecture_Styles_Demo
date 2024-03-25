import { Controller, Get } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js'
import { OrderGRPCService } from './order-grpc.service'
import { Order} from '../../common/order.interfaces'

@Controller()
export class OrderGRPCController {
    constructor(private orderGRPCService: OrderGRPCService) {}

    @GrpcMethod('OrderService', 'findOrders')
    findOrders(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Record<string, Order[]> {
        const orders = this.orderGRPCService.findOrders()
        return { orders: orders }
    }
}