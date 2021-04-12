import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { NoJWT } from './common/decorators/no-jwt.decorator'

@Controller('api')
export class AppController {
  constructor(private authService: AuthService) {}

  @NoJWT()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
