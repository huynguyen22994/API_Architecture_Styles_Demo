import { createUnionType } from '@nestjs/graphql'
import { OrderType } from '../schemas/order.schema'
import { UserType } from '../schemas/user.shcema'

export const SearchResultUnion = createUnionType({
    name: 'SearchResultUnion',
    types: () => [OrderType, UserType] as const,
    resolveType(value) {
      if(value.userName) return UserType;
      return OrderType;
    },
});