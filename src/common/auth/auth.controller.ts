import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const tokens = await this.authService.login(body.email, body.password);
    res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
    return res.json(tokens);
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies['refresh_token'];
    const tokens = await this.authService.refresh(refreshToken);
    res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
    return res.json(tokens);
  }
}
