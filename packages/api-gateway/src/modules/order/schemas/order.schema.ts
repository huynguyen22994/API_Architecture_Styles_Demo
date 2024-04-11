import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('Order')
export class OrderType {
    @Field(type => Int, { nullable: true, description: "ID of a User" })
    id: number;

    @Field(type => String, { nullable: true, description: 'The customer name' })
    customerName: string;

    @Field(type => String, { nullable: true, description: 'The customer address' })
    customerAddress: string;

    @Field(type => String, { nullable: true, deprecationReason: 'Customer phone' })
    customerPhone: string;

    @Field(type => String, { nullable: true, description: 'The price of the order' })
    orderPrice: string;

    @Field(type => String)
    orderStatus: string;

}