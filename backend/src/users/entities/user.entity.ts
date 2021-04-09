import { Comment } from 'src/comments/entities/comment.entity'
import { Post } from 'src/posts/entities/post.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  createdOn: Date

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[]

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[]
}
