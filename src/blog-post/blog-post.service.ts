import { Injectable } from '@nestjs/common';
import { DocumentType, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BlogPost } from './blog-post.model';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectModel(BlogPost)
    private readonly blogPostModel: ReturnModelType<typeof BlogPost>,
  ) {}

  async findAll(): Promise<DocumentType<BlogPost>[]> {
    return this.blogPostModel.find();
  }

  async findOne(id: string): Promise<DocumentType<BlogPost>> {
    return this.blogPostModel.findOne({ _id: id });
  }

  async create(post: BlogPost): Promise<DocumentType<BlogPost>> {
    const newBlog = new this.blogPostModel(post);
    return newBlog.save();
  }

  async delete(id: string): Promise<DocumentType<BlogPost>> {
    return this.blogPostModel.findByIdAndRemove(id);
  }

  async update(id: string, post: BlogPost): Promise<DocumentType<BlogPost>> {
    return this.blogPostModel.findByIdAndUpdate(id, post, { new: true });
  }
}
