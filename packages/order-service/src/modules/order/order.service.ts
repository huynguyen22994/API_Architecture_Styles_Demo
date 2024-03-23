import { Injectable } from '@nestjs/common'
import { orders } from './order.dummy'

@Injectable()
export class OrderService {
    constructor(){}

    findOrders() {
        return orders
    }
}