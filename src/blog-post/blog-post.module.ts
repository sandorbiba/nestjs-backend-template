import { Module } from '@nestjs/common';
import { BlogPost } from './blog-post.model';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([BlogPost])],
  controllers: [BlogPostController],
  providers: [BlogPostService],
  exports: [TypegooseModule],
})
export class BlogModule {}
