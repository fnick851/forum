import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto'
import { Repository } from 'typeorm'
import { CreatePostDto } from './dtos/create-post.dto'
import { Post } from './entities/post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto) {
    const { take, skip } = paginationQuery
    return await this.postRepository.find({
      relations: ['author', 'comments'],
      take,
      skip,
    })
  }

  async create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto)
    return this.postRepository.save(post)
  }
}
