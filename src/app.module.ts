import { Logger, Module } from '@nestjs/common';
import { BlogPostService } from './blog-post/blog-post.service';
import { BlogPostController } from './blog-post/blog-post.controller';
import config from './config/keys';
import { BlogModule } from './blog-post/blog-post.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BlogModule,
    TypegooseModule.forRootAsync({
      useFactory: async () => {
        const logger = new Logger('TypegooseModule');
        logger.debug(`Connecting to DB: ${config.mongoURI}`);
        return {
          uri: config.mongoURI,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class AppModule {}
