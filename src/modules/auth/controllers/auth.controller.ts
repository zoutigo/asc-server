import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from '../guards/google-auth-guard.guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'ok' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'redirect ok' };
  }

  @Get('status')
  getUser(@Req() req: Request) {
    console.log('controller user', req.user);
    if (req.user) return { msg: 'authenticated' };

    return { msg: 'not authenticated' };
  }
}
