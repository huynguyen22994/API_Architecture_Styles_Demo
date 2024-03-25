import { Observable } from "rxjs";

type Empty = {}

export interface OrderService {
    findOrders(Empty: Empty): Observable<Order>;
}

export interface Order {
    id: number;
    customerName: string;
}