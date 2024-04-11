import { Observable } from "rxjs";

type Empty = {}

export interface OrderServiceV2 {
    findOrders(Empty: Empty): Observable<OrderListV2>;
}

export interface OrderV2 {
    id: number;
    customerName: string;
    customerAddress: string;
    customerPhone: string;
    orderPrice: number;
    orderStatus: string;
}

export interface OrderListV2 {
    orders: OrderListV2[]
}