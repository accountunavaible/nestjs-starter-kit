import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import DefaultConfig from '../config/default.config';

@Module({
  imports: [
    JwtModule.register({
      secret: DefaultConfig.jwt,
      signOptions: {
        // expire in 10 minutes, do whatever you like
        expiresIn: '600s',
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
