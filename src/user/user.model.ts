import { prop } from '@typegoose/typegoose';
import { IsEmail, IsString } from 'class-validator';

export class User {
  @prop()
  @IsString()
  username: string;

  @prop()
  @IsEmail()
  email: string;

  @prop()
  @IsString()
  password: string;

  @prop()
  @IsString()
  profilePicture: string;
}
