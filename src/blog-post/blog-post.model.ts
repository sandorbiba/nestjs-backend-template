import { prop, Ref } from '@typegoose/typegoose';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/user.model';

export class BlogPost {
  @prop()
  @IsString()
  title: string;

  @prop()
  @IsString()
  subtitle: string;

  @prop()
  @IsString()
  content: string;

  @prop()
  @IsDate()
  date: Date;

  @prop({ ref: 'User' }) @IsNotEmpty() user: Ref<User>;
}
