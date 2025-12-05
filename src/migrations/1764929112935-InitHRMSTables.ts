import { MigrationInterface, QueryRunner } from "typeorm";

export class InitHRMSTables1764929112935 implements MigrationInterface {
    name = 'InitHRMSTables1764929112935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "documents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "aadhar" character varying NOT NULL, "pan" character varying NOT NULL, "resume" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "u_id" uuid, CONSTRAINT "REL_888eb74717fdd78ee6c68c0425" UNIQUE ("u_id"), CONSTRAINT "PK_ac51aa5181ee2036f5ca482857c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "attendance" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" character varying NOT NULL, "check_in" character varying, "check_out" character varying, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "u_id" uuid, CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "leave" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "leave_type" character varying NOT NULL, "start_date" character varying NOT NULL, "end_date" character varying NOT NULL, "reason" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "u_id" uuid, CONSTRAINT "PK_501f6ea368365d2a40b1660e16b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payroll" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "leave_type" character varying NOT NULL, "start_date" character varying NOT NULL, "end_date" character varying NOT NULL, "reason" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "u_id" uuid, CONSTRAINT "PK_7a76b819506029fc535b6e002e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "gender" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "job_role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "u_id" uuid, CONSTRAINT "REL_7078f3edc441565a20c10b8146" UNIQUE ("u_id"), CONSTRAINT "PK_ff6fbb46f0a78351950c41a5e66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job_role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "u_id" uuid, CONSTRAINT "REL_679604d6ddd074fc10ece357f1" UNIQUE ("u_id"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "documents" ADD CONSTRAINT "FK_888eb74717fdd78ee6c68c0425d" FOREIGN KEY ("u_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD CONSTRAINT "FK_30b074a12f42dcdb12e7cffd889" FOREIGN KEY ("u_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_873ad30c154cdeb65e28ae4f92a" FOREIGN KEY ("u_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payroll" ADD CONSTRAINT "FK_e9988af49b869ecfc1c214e9179" FOREIGN KEY ("u_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_profile" ADD CONSTRAINT "FK_7078f3edc441565a20c10b8146a" FOREIGN KEY ("u_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_679604d6ddd074fc10ece357f19" FOREIGN KEY ("u_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_679604d6ddd074fc10ece357f19"`);
        await queryRunner.query(`ALTER TABLE "employee_profile" DROP CONSTRAINT "FK_7078f3edc441565a20c10b8146a"`);
        await queryRunner.query(`ALTER TABLE "payroll" DROP CONSTRAINT "FK_e9988af49b869ecfc1c214e9179"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_873ad30c154cdeb65e28ae4f92a"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP CONSTRAINT "FK_30b074a12f42dcdb12e7cffd889"`);
        await queryRunner.query(`ALTER TABLE "documents" DROP CONSTRAINT "FK_888eb74717fdd78ee6c68c0425d"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "employee_profile"`);
        await queryRunner.query(`DROP TABLE "payroll"`);
        await queryRunner.query(`DROP TABLE "leave"`);
        await queryRunner.query(`DROP TABLE "attendance"`);
        await queryRunner.query(`DROP TABLE "documents"`);
    }

}
