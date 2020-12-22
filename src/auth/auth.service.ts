import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) {
      return null;
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      const logger = new Logger('bootstrap');
      logger.warn(`Password did not match for user: ${username}`);
      return null;
    }
    const { _id, profilePicture } = user;
    return { username, _id, profilePicture };
  }

  async validateUserById(id: string): Promise<any> {
    const user = await this.userService.findById(id);
    if (user) {
      const { username, _id, profilePicture } = user;
      return { username, _id, profilePicture };
    }
    return null;
  }
}
