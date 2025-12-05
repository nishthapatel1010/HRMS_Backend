import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "../common/user.entity";

@Entity("payroll")
export class Payroll {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.payroll)
  @JoinColumn({ name: "u_id" })
  user!: User;

  @Column()
  leave_type!: string;

  @Column()
  start_date!: string;

  @Column()
  end_date!: string;

  @Column()
  reason!: string;

  @CreateDateColumn()
  created_at!: Date;
}
