import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'

async function bootstrap() {
  const gRPCApp = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: ['hero', 'order', 'order2'],
      protoPath: [join(__dirname, '../protos/hero.proto'), join(__dirname, '../protos/order.proto'), join(__dirname, '../protos/order.v2.proto')]
    }
  });
  await gRPCApp.listen()

  const app = await NestFactory.create(AppModule);
  await app.listen(8002);
}
bootstrap();
