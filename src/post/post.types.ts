import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PostStatus } from '@prisma/client';
import { User } from 'src/user/user.types';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  slug: string;

  @Field({ nullable: true })
  excerpt?: string;

  @Field({ nullable: true })
  content?: string;

  @Field(() => PostStatus)
  status: PostStatus;

  @Field({ nullable: true })
  publishedAt?: Date;

  @Field({ nullable: true })
  scheduledAt?: Date;

  @Field(() => Int, { defaultValue: 0 })
  viewCount: number;

  @Field(() => Int, { defaultValue: 0 })
  likeCount: number;

  @Field(() => Int, { defaultValue: 0 })
  commentCount: number;

  @Field({ defaultValue: false })
  featured: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => String)
  authorId: string;

  @Field(() => User)
  author: User;

  //   @Field(() => [Category], { nullable: 'itemsAndList' })
  //   categories?: Category[];

  //   @Field(() => [Tag], { nullable: 'itemsAndList' })
  //   tags?: Tag[];

  //   @Field(() => [Comment], { nullable: 'itemsAndList' })
  //   comments?: Comment[];

  //   @Field(() => [Like], { nullable: 'itemsAndList' })
  //   likes?: Like[];

  //   @Field(() => [Bookmark], { nullable: 'itemsAndList' })
  //   bookmarks?: Bookmark[];

  //   @Field(() => YDoc, { nullable: true })
  //   ydoc?: YDoc;
}
