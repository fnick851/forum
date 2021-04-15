import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common'
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { NoJWT } from './common/decorators/no-jwt.decorator'
import { CreateUserDto } from './users/dtos/create-user.dto'
import { UsersService } from './users/users.service'

@Controller('api')
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @NoJWT()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user)
  }

  @NoJWT()
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto)
  }
}
