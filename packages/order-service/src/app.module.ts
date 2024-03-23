import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './hero/heroes.controller'
import { OrderModule } from './modules/order/order.module'
import { OrderGraphModule } from './modules/order-graph/order-graph.module';

@Module({
  imports: [
    OrderModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //playground: true,
      autoSchemaFile: true
    }),
    OrderGraphModule,
  ],
  controllers: [AppController, HeroesController],
  providers: [AppService],
})
export class AppModule {}
