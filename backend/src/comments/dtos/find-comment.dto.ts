import { Allow } from 'class-validator'
import { Post } from 'src/posts/entities/post.entity'

export class FindCommentDto {
  @Allow()
  readonly onPost: Post
}
