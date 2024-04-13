import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { HttpModule } from '@nestjs/axios'
import { DateScalar } from './common/scalars/date.scalar'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/order/order.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
      // include: [UserModule]
    }),
    HttpModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {}
