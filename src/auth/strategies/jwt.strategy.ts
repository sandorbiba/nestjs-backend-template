import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'FSFGFDVsbdshdh',
    });
  }

  async validate(payload: any): Promise<any> {
    const id = payload.id;
    const user = await this.authService.validateUserById(id);

    if (!user) {
      throw new UnauthorizedException();
    }
    console.log(user);
    return user;
  }
}
