import { Observable } from "rxjs";

type Empty = {}

type FindOneParams = {
    customerName: string
}

export interface OrderServiceV2 {
    findOrders(Empty: Empty): Observable<OrderListV2>;
    findOrderByCustomerName(FindOneParams: FindOneParams): Observable<OrderV2>;
    createOrder(OrderV2: OrderV2): Observable<OrderV2>
}

export interface OrderV2 {
    id?: number;
    customerName: string;
    customerAddress: string;
    customerPhone: string;
    orderPrice: number;
    orderStatus: string;
    createdAt?: Date
}

export interface OrderListV2 {
    orders: OrderV2[]
}