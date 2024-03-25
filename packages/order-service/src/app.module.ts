import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './hero/heroes.controller'
import { OrderGRPCModule } from './modules/order-grpc/order-grpc.module'
import { OrderGraphModule } from './modules/order-graph/order-graph.module';
import { OrderRestModule } from './modules/order-rest/order-rest.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //playground: true,
      autoSchemaFile: true
    }),
    OrderGRPCModule,
    OrderGraphModule,
    OrderRestModule
  ],
  controllers: [AppController, HeroesController],
  providers: [AppService],
})
export class AppModule {}
