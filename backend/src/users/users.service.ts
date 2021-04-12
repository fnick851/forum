import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username })
  }

  async create(createUserDto: CreateUserDto) {
    const post = this.usersRepository.create({
      ...createUserDto,
      createdOn: new Date(Date.now()).toLocaleString(),
    })
    return this.usersRepository.save(post)
  }
}
