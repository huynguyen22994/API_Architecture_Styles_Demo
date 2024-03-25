import { Injectable } from '@nestjs/common'
import { orders } from '../../data/order.dummy'

@Injectable()
export class OrderGRPCService {
    constructor(){}

    findOrders() {
        return orders
    }
}