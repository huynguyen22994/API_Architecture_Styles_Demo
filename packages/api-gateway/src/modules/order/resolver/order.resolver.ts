import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { OrderType } from '../schemas/order.schema'
import { OrderServices } from '../services/order.service'
import { OrderTypeInput } from '../types/order.type'

@Resolver(of => [OrderType])
export class OrderResolver {
    constructor(private readonly orderServices: OrderServices ){}

    @Query(returns => [OrderType])
    async findOrders() {
        try {
            return await this.orderServices.getOrderList()
        } catch (error) {
            console.log(error)
        }
    }

    @Query(returns => OrderType)
    async findOrderByCustomerName(@Args('customerName', { type: () => String }) customerName: string) {
        const result = await this.orderServices.getOrderByCustomerName(customerName)
        return result
    }

    @Mutation(returns => OrderType)
    async createOrder(@Args('order') orderData: OrderTypeInput) {
        const result = await this.orderServices.createOrder(orderData)
        return result
    }

}