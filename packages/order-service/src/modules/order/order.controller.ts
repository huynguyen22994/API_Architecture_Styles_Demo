import { Controller, Get } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js'
import { OrderV2Service } from './order.service'
import { Order, OrderV2} from '../../common/order.interfaces'

@Controller()
export class OrderV2Controller {
    constructor(private orderV2Service: OrderV2Service) {}

    @GrpcMethod('OrderServiceV2', 'findOrders')
    async findOrders(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Record<string, OrderV2[]>> {
        const orders = await this.orderV2Service.findOrders()
        return { orders: orders }
    }

    @GrpcMethod('OrderServiceV2', 'findOrderByCustomerName')
    async findOrderByCustomerName(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<OrderV2> {
        const { customerName } = data
        const order = await this.orderV2Service.findOrderByCustomerName(customerName)
        return order
    }

    @GrpcMethod('OrderServiceV2', 'createOrder')
    async createOrder(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<OrderV2> {
        const { customerName, customerAddress, customerPhone, orderPrice, orderStatus } = data
        const order = await this.orderV2Service.createOrder({
            customerName,
            customerAddress,
            customerPhone,
            orderPrice,
            orderStatus
        })
        console.log('res data:::', order)
        return order
    }
}