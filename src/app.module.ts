import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post/blog-post.service';
import { BlogPostController } from './blog-post/blog-post.controller';
import { BlogModule } from './blog-post/blog-post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [BlogModule, CommonModule, UserModule, AuthModule, CommonModule],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class AppModule {}
