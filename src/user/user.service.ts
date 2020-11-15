import { Injectable } from '@nestjs/common';
import { DocumentType, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async findOne(id: string): Promise<DocumentType<User>> {
    return this.userModel.findOne({ _id: id });
  }

  async create(post: User): Promise<DocumentType<User>> {
    const newBlog = new this.userModel(post);
    return newBlog.save();
  }
}
