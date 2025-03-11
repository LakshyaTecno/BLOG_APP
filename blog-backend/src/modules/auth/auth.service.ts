import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateOAuthLogin(profile: any, provider: string) {
    console.log('OAuth Profile:', JSON.stringify(profile, null, 2)); // Add this log

    const { id, emails, displayName } = profile;

    if (!emails || emails.length === 0) {
      throw new Error('No email found in profile');
    }

    const user = await this.usersService.createOrUpdate({
      provider,
      providerId: id,
      email: emails[0].value,
      displayName,
    });

    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
