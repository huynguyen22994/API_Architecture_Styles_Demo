import { Observable } from "rxjs";

type Empty = {}

export interface HeroesService {
    findOne(data: { id: number }): Observable<Hero>;
}

export interface Hero {
    id: number;
    name: string;
}

export interface OrderService {
    findOrders(Empty): Observable<Order>;
}

export interface Order {
    id: number;
    customerName: string;
}