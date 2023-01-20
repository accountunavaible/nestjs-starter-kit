import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';
import { Throttle } from '@nestjs/throttler';

@Controller('test')
export class TestController {
  constructor(private authService: AuthService) {}
  @UseGuards(JwtAuthGuard)
  @Get('/')
  test(@Request() req) {
    console.log('ok', req.user);
    return 'ok';
  }

  // can only call login for 3 times in 15 minutes
  @Throttle(3, 900)
  @Post('/login')
  login() {
    return this.authService.login({
      username: 'test',
      userId: 'teasdasd',
    });
  }
}
