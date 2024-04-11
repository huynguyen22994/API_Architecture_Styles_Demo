import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderV2Service {
    constructor(
        @InjectRepository(OrderEntity)
        private usersRepository: Repository<OrderEntity>,
    ){}

    findOrders(): Promise<OrderEntity[]> {
        return this.usersRepository.find()
    }
}