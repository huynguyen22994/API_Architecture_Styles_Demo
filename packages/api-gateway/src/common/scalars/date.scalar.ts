import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', (type) => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number): Date {
    /**
     * (1) use for input - value from the client
     */
    return new Date(value);
  }

  parseLiteral(ast: ValueNode): Date {
    /**
     * (2) use for input - value from the client
     */
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }

  serialize(value: Date): number {
    /**
     * (3) use for output - value sent to the client
     */
    return value.getTime(); 
  }
}