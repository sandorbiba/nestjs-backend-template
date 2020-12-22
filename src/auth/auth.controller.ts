import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @ApiBody({ type: LoginDto })
  async login(@Req() req: Request & { user: any }) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/user')
  @ApiBearerAuth()
  fetchUser(@Req() req: Request & { user: any }) {
    return req.user;
  }
}
