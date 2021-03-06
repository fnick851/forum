import { Post } from 'src/posts/entities/post.entity'
import { User } from 'src/users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @Column()
  madeOn: Date

  @ManyToOne(() => User, (user) => user.comments)
  author: User

  @ManyToOne(() => Post, (post) => post.comments)
  onPost: Post
}
