import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ username })
  }

  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)

    const post = this.usersRepository.create({
      ...createUserDto,
      password: hash,
      createdOn: new Date(Date.now()).toLocaleString(),
    })
    return await this.usersRepository.save(post)
  }
}
