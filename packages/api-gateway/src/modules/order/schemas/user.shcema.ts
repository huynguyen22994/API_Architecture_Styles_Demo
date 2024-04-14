import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('User')
export class UserType {

    @Field(type => String, { nullable: true, description: 'The user name' })
    userName: string;

}