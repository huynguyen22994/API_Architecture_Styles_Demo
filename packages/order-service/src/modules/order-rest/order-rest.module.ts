import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { OrderRestController } from './order-rest.controller'
import { OrderRestService } from './order-rest.service'

@Module({
    imports: [],
    controllers: [OrderRestController],
    providers: [OrderRestService],
    exports: []
})
export class OrderRestModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {

    }
}