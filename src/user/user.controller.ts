import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.dto';
import { DocumentType } from '@typegoose/typegoose';
import { User } from './user.model';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string): Promise<DocumentType<User>> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() CreateUserDto: CreateUserDto): Promise<DocumentType<User>> {
    return this.userService.create(CreateUserDto);
  }
}
