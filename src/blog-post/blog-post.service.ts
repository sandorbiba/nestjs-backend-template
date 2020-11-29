import { Injectable } from '@nestjs/common';
import { DocumentType, mongoose, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { BlogPost } from './blog-post.model';
import { CreateBlogDto } from './dto/create-blog-post.dto';

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

  async create(post: CreateBlogDto): Promise<DocumentType<BlogPost>> {
    const { user, ...rest } = post;
    const userId = mongoose.Types.ObjectId(user);
    const newBlog = new this.blogPostModel({ user: userId, ...rest });
    return newBlog.save();
  }

  async delete(id: string): Promise<DocumentType<BlogPost>> {
    return this.blogPostModel.findByIdAndRemove(id);
  }

  async update(
    id: string,
    post: CreateBlogDto,
  ): Promise<DocumentType<BlogPost>> {
    const { user, ...rest } = post;
    const userId = mongoose.Types.ObjectId(user);
    return this.blogPostModel.findByIdAndUpdate(
      id,
      { user: userId, ...rest },
      { new: true },
    );
  }
}
