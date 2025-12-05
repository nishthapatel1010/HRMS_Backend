import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn
} from "typeorm";
import { User } from "../common/user.entity";

@Entity("documents")
export class Documents {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "u_id" })
  user!: User;

  @Column()
  aadhar!: string;

  @Column()
  pan!: string;

  @Column()
  resume!: string;

  @CreateDateColumn()
  created_at!: Date;
}
