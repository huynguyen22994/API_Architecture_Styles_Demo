import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { IOrder } from './order.interface'

@Injectable()
export class OrderV2Service {
    constructor(
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,
    ){}

    findOrders(): Promise<OrderEntity[]> {
        return this.orderRepository.find()
    }

    async findOrderByCustomerName(customerName: string): Promise<OrderEntity>  {
        return await this.orderRepository.findOne({
            where: {
                customerName: customerName
            }
        })
    }

    async createOrder(order: IOrder): Promise<OrderEntity>  {
        const { customerName, customerAddress, customerPhone, orderPrice, orderStatus } = order
        const result = await this.orderRepository.create({
            customerName,
            customerAddress,
            customerPhone,
            orderPrice,
            orderStatus
        })
        return result
    }
}