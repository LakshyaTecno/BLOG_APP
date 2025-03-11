import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-facebook';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('facebook.appId'),
      clientSecret: configService.get<string>('facebook.appSecret'),
      callbackURL:
        configService.get<string>('facebook.callbackUrl') ||
        'http://localhost:3000/auth/facebook/callback',
      scope: ['email'],
      profileFields: ['id', 'displayName', 'emails'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    return this.authService.validateOAuthLogin(profile, 'facebook');
  }
}
