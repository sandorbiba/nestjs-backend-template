import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('BlogProject API')
    .setDescription('BlogProject API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const logger = new Logger('bootstrap');
  logger.debug(`App is listening on port:${port}`);

  await app.listen(port);
}
bootstrap();
