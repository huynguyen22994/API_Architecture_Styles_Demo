import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [OrderService],
    exports: []
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {

    }
}