import { Controller, Get,Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CONSTANTS } from './constants';
import { RoleGuard } from './role.guard';

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
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.ADMIN))
  adminData(@Request() req): string{
    return "Admin has accessed."+ JSON.stringify(req.user);
  }

  @Get('/user') 
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.USER))
  userData(@Request() req): string{
    return "User has accessed."+ JSON.stringify(req.user);
  }
}