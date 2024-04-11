import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { OrderServices } from './services/order.service'
import { OrderResolver } from './resolver/order.resolver'

@Module({
    imports: [],
    providers: [OrderServices, OrderResolver],
    exports: []
})
export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {

    }
}