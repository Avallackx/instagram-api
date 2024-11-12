import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../User/user.entity';

@Entity()
export class PostItem {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  image!: string;

  @Column()
  countLike: number;

  @ManyToOne(() => User, (user) => user.postItems)
  user: User;
}
