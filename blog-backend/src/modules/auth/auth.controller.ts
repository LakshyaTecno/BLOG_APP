import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RolesGuard } from './guards/roles.guard';
import { Role } from 'src/common/enums/roles.enum';
import { Roles } from 'src/common/decorators/roles.decorators';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Google Login
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({ summary: 'Redirect to Google login page' })
  @ApiResponse({ status: 302, description: 'Redirects to Google login page' })
  async googleLogin() {
    // Redirects to Google login page
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({ summary: 'Google OAuth callback' })
  @ApiResponse({
    status: 200,
    description: 'Returns JWT and user profile after successful login',
  })
  async googleCallback(@Req() req) {
    return this.authService.login(req.user);
  }

  // Facebook Login
  @Get('facebook')
  @UseGuards(FacebookAuthGuard)
  @ApiOperation({ summary: 'Redirect to Facebook login page' })
  @ApiResponse({ status: 302, description: 'Redirects to Facebook login page' })
  async facebookLogin() {
    // Redirects to Facebook login page
  }

  @Get('facebook/callback')
  @UseGuards(FacebookAuthGuard)
  @ApiOperation({ summary: 'Facebook OAuth callback' })
  @ApiResponse({
    status: 200,
    description: 'Returns JWT and user profile after successful login',
  })
  async facebookCallback(@Req() req) {
    return this.authService.login(req.user);
  }

  // Example of protected route using JWT
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  //   @UseGuards(JwtAuthGuard, RolesGuard)  // no need to add here role both can access this
  //   @Roles(Role.ADMIN, Role.USER)
  @ApiOperation({ summary: 'Get user profile using JWT' })
  @ApiResponse({ status: 200, description: 'Returns user profile' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getProfile(@Req() req) {
    return req.user; // Data extracted from JWT
  }

  @Post('create-user')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }
}
