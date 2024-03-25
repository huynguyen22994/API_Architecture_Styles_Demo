import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { OrderGRPCController } from './order-grpc.controller'
import { OrderGRPCService } from './order-grpc.service'

@Module({
    imports: [],
    controllers: [OrderGRPCController],
    providers: [OrderGRPCService],
    exports: []
})
export class OrderGRPCModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {

    }
}