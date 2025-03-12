import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostItem } from '../PostItem/postItem.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email: string;

  @Column()
  userName!: string;

  @Column()
  password: string;

  @Column({ default: '' })
  refreshToken: string;

  @OneToMany(() => PostItem, (postItem) => postItem.user)
  postItems: PostItem[];
}
