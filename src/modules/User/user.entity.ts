import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostItem } from '../PostItem/postItem.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  userName!: string;

  @OneToMany(() => PostItem, (postItem) => postItem.user)
  postItems: PostItem[];
}
