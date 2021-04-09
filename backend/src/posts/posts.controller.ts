import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto'
import { CreatePostDto } from './dtos/create-post.dto'
import { PostsService } from './posts.service'

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    return await this.postsService.findAll(paginationQuery)
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto)
  }
}
