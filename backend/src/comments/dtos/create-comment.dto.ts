import { Allow, IsString } from 'class-validator'
import { Post } from 'src/posts/entities/post.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateCommentDto {
  @IsString()
  readonly content: string

  @Allow()
  readonly author: User

  @Allow()
  readonly onPost: Post
}
