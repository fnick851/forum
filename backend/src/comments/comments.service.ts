import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCommentDto } from './dtos/create-comment.dto'
import { FindCommentDto } from './dtos/find-comment.dto'
import { Comment } from './entities/comment.entity'

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentReposiory: Repository<Comment>,
  ) {}

  async findForPost(findCommentDto: FindCommentDto) {
    const { onPost } = findCommentDto
    return await this.commentReposiory.find({ where: { onPost } })
  }

  async create(createCommentDto: CreateCommentDto) {
    const comment = this.commentReposiory.create({
      ...createCommentDto,
      madeOn: new Date(Date.now()).toLocaleString(),
    })
    return await this.commentReposiory.save(comment)
  }
}
