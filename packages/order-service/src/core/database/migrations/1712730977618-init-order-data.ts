import { MigrationInterface, QueryRunner } from "typeorm";

export class InitOrderData1712730977618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO "orders" (customer_name, customer_address, customer_phone, order_price, order_status)
        VALUES ('Customer 1', '123 LTN', '0912345678', 300000, 'new')
        `);

        await queryRunner.query(`
        INSERT INTO "orders" (customer_name, customer_address, customer_phone, order_price, order_status)
        VALUES ('Customer 2', '124 LTN', '0952345678', 400000, 'new')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
