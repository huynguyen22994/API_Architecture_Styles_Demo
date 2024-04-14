import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class OrderBaseType {
    @Field()
    createdAt: Date
}