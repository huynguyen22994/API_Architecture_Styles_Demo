import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { OrderType } from '../schemas/order.schema'
import { OrderServices } from '../services/order.service'
import { OrderTypeInput } from '../types/order.type'
import { SearchResultUnion } from '../union/search.union.type'

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

    @Query(returns => OrderType)
    async findOrderByCreatedDate(@Args('date', { type: () => Date }) date: Date) {
        const result = await this.orderServices.getOrderByCustomerName("Customer 2")
        return result
    }

    @Query(result => [SearchResultUnion])
    async search(@Args('searchText', { type: () => String }) searchText: string): Promise<Array<typeof SearchResultUnion>> {
        const result = await this.orderServices.getOrderByCustomerName(searchText)
        if(!result) return []
        return [result as any]
    }

    @Mutation(returns => OrderType)
    async createOrder(@Args('order') orderData: OrderTypeInput) {
        const result = await this.orderServices.createOrder(orderData)
        return result
    }

}