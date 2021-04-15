import { Body, Controller, Get, Post } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CreateCommentDto } from './dtos/create-comment.dto'
import { FindCommentDto } from './dtos/find-comment.dto'

@Controller('api/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async findForPost(@Body() findCommentDto: FindCommentDto) {
    return await this.commentsService.findForPost(findCommentDto)
  }

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    return await this.commentsService.create(createCommentDto)
  }
}
