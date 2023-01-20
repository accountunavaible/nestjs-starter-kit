import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import DefaultConfig from '../../config/default.config';
import { JwtPayload } from '../../type/payload.type';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: DefaultConfig.jwt,
    });
  }

  async validate(payload: JwtPayload) {
    // here depends on your own return object, how you handled the encrypted jwt
    return { userId: payload.userId, username: payload.username };
  }
}
