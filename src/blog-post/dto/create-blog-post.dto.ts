import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly subtitle: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly date: Date;
}
