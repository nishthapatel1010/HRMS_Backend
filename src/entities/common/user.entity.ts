import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { EmployeeProfile } from "../user/employeeProfile.entity";
import { Documents } from "../user/documents.entity";
import { Attendance } from "../admin/attendance.entity";
import { Leave } from "../admin/leave.entity";
import { Payroll } from "../admin/payroll.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ default: "user" })
  role!: string;

  @OneToOne(() => EmployeeProfile, (profile) => profile.user)
  employeeProfile!: EmployeeProfile;

  @OneToOne(() => Documents, (docs) => docs.user)
  documents!: Documents;

  @OneToMany(() => Attendance, (attendance) => attendance.user)
  attendance!: Attendance[];

  @OneToMany(() => Leave, (leave) => leave.user)
  leaves!: Leave[];

  @OneToMany(() => Payroll, (payroll) => payroll.user)
  payroll!: Payroll[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
