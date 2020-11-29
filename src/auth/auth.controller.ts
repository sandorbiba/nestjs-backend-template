import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @ApiBody({})
  async login(@Req() req: Request & { user: any }) {
    return req.user;
  }
}
