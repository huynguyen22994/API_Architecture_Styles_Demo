import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { OrderType } from '../schemas/order.schema'
import { OrderServices } from '../services/order.service'

@Resolver(of => [OrderType])
export class OrderResolver {
    constructor(private readonly orderServices: OrderServices ){}

    @Query(returns => [OrderType])
    async findUsers() {
        try {
            return await this.orderServices.getOrderList()
        } catch (error) {
            console.log(error)
        }
    }

    @Query(returns => OrderType)
    findUserById(@Args('id', { type: () => Int }) id: number) {
        console.log(id)
        return {
            id: 1,
            email: 'huy.nguyen22994@gmail.com',
            firstName: 'Huy',
            lastName: 'Nguyễn',
            country: 'Việt Nam'
        }
    }
}