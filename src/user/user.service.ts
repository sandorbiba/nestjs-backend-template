import { Injectable } from '@nestjs/common';
import { DocumentType, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './user.model';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async findOne(username: string): Promise<DocumentType<User>> {
    return this.userModel.findOne({ username }).lean();
  }
  async findById(id: string): Promise<DocumentType<User>> {
    return this.userModel.findById({ _id: id }).lean();
  }

  async create(user: User): Promise<DocumentType<User>> {
    const { username, email, profilePicture } = user;
    const salt = await bcrypt.genSalt(10);
    const password = bcrypt.hash(user.password, salt);

    const newUser = new this.userModel({
      username,
      email,
      profilePicture,
      password,
    });
    return newUser.save();
  }
}
