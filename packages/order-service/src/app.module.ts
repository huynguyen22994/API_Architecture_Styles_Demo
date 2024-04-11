import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './hero/heroes.controller'
import { OrderGRPCModule } from './modules/order-grpc/order-grpc.module'
import { OrderGraphModule } from './modules/order-graph/order-graph.module';
import { OrderRestModule } from './modules/order-rest/order-rest.module'
import { OrderV2Module } from './modules/order/order.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'blm-demo',
      password: 'blm-demo',
      database: 'blm-demo',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      autoLoadEntities: true,
      logger: 'advanced-console',
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //playground: true,
      autoSchemaFile: true
    }),
    OrderGRPCModule,
    OrderGraphModule,
    OrderRestModule,
    OrderV2Module
  ],
  controllers: [AppController, HeroesController],
  providers: [AppService],
})
export class AppModule {}
