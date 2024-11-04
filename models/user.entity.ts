import { Entity, Column, PrimaryGeneratedColumn } from 'services/node_modules/typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}