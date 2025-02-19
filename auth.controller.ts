import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: { name: string; password: string }) {
    return this.authService.login(body.name, body.password);
  }

  @Post('signup')
  signup(@Body() body: { name: string; password: string }) {
    return this.authService.signup(body.name, body.password);
  }

  @Post('forgot-password')
  forgotPassword(@Body() body: { name: string }) {
    return this.authService.forgotPassword(body.name);
  }

  @Post('reset-password')
  resetPassword(@Body() body: { token: string; newPassword: string }) {
    return this.authService.resetPassword(body.token, body.newPassword);
  }
}