import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { ServerUnaryCall, Metadata } from '@grpc/grpc-js'
import { HeroById, Hero } from './hero'

@Controller()
export class HeroesController {

  @GrpcMethod('HeroesService', 'findOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}