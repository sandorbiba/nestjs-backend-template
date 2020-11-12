import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog-post.dto';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './blog-post.model';
import { DocumentType } from '@typegoose/typegoose';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Get()
  findAll(): Promise<DocumentType<BlogPost>[]> {
    return this.blogPostService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id') id: string): Promise<DocumentType<BlogPost>> {
    return this.blogPostService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateBlogDto })
  create(
    @Body() createBlogDto: CreateBlogDto,
  ): Promise<DocumentType<BlogPost>> {
    return this.blogPostService.create(createBlogDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string): Promise<DocumentType<BlogPost>> {
    return this.blogPostService.delete(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: CreateBlogDto })
  update(
    @Body() updateBlogDto: CreateBlogDto,
    @Param('id') id: string,
  ): Promise<DocumentType<BlogPost>> {
    return this.blogPostService.update(id, updateBlogDto);
  }
}
