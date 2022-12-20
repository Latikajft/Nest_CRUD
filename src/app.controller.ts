import { Controller, Get,Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly authService: AuthService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request() req): string{
    const token = this.authService.generateToken(req.user);
    return token;
  }

  @Get('/admin')
  @UseGuards(AuthGuard("jwt"))
  adminData(): string{
    return "Admin has accessed.";
  }
}