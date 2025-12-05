import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "../common/user.entity";

@Entity("attendance")
export class Attendance {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.attendance)
  @JoinColumn({ name: "u_id" })
  user!: User;

  @Column()
  date!: string;

  @Column({ nullable: true })
  check_in!: string;

  @Column({ nullable: true })
  check_out!: string;

  @Column()
  status!: string; // present, absent, leave

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
