export interface Order {
    id: number;
    customerName: string;
}

export interface OrderV2 {
    id: number;
    customerName: string;
    customerAddress: string;
    customerPhone: string;
    orderPrice: number;
    orderStatus: string;
}