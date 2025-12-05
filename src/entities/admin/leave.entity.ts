import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "../common/user.entity";

@Entity("leave")
export class Leave {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.leaves)
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
