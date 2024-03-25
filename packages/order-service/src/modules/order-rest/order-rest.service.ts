import { Injectable } from '@nestjs/common'
import { orders } from '../../data/order.dummy'

@Injectable()
export class OrderRestService {
    constructor(){}

    findOrders() {
        return orders
    }
}