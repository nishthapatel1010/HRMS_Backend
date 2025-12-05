import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { User } from "../common/user.entity";

@Entity("employee_profile")
export class EmployeeProfile {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "u_id" })
  user!: User;

  @Column()
  name!: string;

  @Column()
  gender!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  job_role!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
