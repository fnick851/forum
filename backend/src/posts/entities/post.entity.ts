import { Comment } from 'src/comments/entities/comment.entity'
import { User } from 'src/users/entities/user.entity'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  body: string

  @ManyToOne(() => User, (user) => user.posts)
  author: User

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment
}
