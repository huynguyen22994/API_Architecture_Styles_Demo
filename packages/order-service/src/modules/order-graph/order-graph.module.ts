import { Module } from '@nestjs/common';
import { OrderResolver } from './order-graph.resolver';

@Module({
    providers: [OrderResolver]
})
export class OrderGraphModule {}
