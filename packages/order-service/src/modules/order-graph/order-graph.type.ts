import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('Order')
export class OrderType {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    customerName: string;
}