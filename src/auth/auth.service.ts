import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../type/payload.type';
import { Throttle } from '@nestjs/throttler';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // this will require to do more for jwt token, you can build it your own
  async login(user: JwtPayload) {
    const payload = { username: user.username, userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
