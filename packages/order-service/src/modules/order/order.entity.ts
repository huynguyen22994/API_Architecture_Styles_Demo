import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'customer_name' })
  customerName: string;

  @Column({ name: 'customer_address' })
  customerAddress: string;

  @Column({ name: 'customer_phone' })
  customerPhone: string;

  @Column({ name: 'order_price' })
  orderPrice: number;

  @Column({ name: 'order_status'})
  orderStatus: string;

}
