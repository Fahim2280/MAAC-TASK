import { Controller, Get, Post, Body, Render } from 'services/node_modules/@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Render('signin')
  showLogin() {
    return;
  }

  @Post('login')
  async login(@Body() loginDto: { username: string, password: string }) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

  @Get('register')
  @Render('signup')
  showRegister() {
    return;
  }

  @Post('register')
  async register(@Body() registerDto: { username: string, password: string }) {
    const user = await this.authService.register(registerDto.username, registerDto.password);
    return { message: 'User registered successfully', user };
  }
}