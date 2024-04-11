import { MigrationInterface, QueryRunner } from "typeorm";

export class InitOrder1712727856694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS orders(
                id SERIAL PRIMARY KEY,
                customer_name TEXT NOT NULL,
                customer_address TEXT NOT NULL,
                customer_phone TEXT NOT NULL,
                order_price INTEGER NOT NULL,
                order_status TEXT NOT NULL,
                created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS orders
        `);
    }

}
