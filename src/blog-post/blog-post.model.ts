import { prop } from '@typegoose/typegoose';

export class BlogPost {
  @prop()
  title: string;

  @prop()
  subtitle: string;

  @prop()
  content: string;

  @prop()
  date: Date;

  /*  @prop({ ref: 'Category' }) @IsNotEmpty() categories: Ref<Category>[];
  @prop({ ref: 'Publisher' }) @IsNotEmpty() publisher: Ref<Publisher>; */
}
