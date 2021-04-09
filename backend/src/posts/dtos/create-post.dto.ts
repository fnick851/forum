import { Allow, IsString } from 'class-validator'
import { User } from 'src/users/entities/user.entity'

export class CreatePostDto {
  @IsString()
  readonly title: string

  @IsString()
  readonly body: string

  @Allow()
  readonly author: User
}
