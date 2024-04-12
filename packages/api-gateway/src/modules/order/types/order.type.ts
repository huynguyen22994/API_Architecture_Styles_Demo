import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class OrderTypeInput {
    @Field({ nullable: false })
    customerName: string;

    @Field({ nullable: false })
    customerAddress: string;

    @Field({ nullable: true })
    customerPhone: string;

    @Field({ nullable: false })
    orderPrice: number

    @Field({ nullable: true, defaultValue: 'new' })
    orderStatus: string
}