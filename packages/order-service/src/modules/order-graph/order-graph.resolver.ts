import { Resolver, Query } from '@nestjs/graphql'
import { OrderType } from './order-graph.type';
import { orders } from '../../data/order.dummy'

@Resolver(of => [OrderType])
export class OrderResolver {
    @Query(returns => [OrderType])
    findOrders() {
        return orders
    }
}