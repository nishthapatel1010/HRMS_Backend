import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../common/user.entity";

@Entity("employee")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "u_id" })
  user!: User;

  @Column()
  job_role!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
