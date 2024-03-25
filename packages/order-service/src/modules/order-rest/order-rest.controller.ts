import { Controller, Get } from '@nestjs/common'
import { OrderRestService } from './order-rest.service'
import { Order} from '../../common/order.interfaces'

@Controller()
export class OrderRestController {
    constructor(private orderRestService: OrderRestService) {}

    @Get('/orders')
    getOrders() {
        const orders: Order[] = this.orderRestService.findOrders()
        return { orders }
    }
}