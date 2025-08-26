import { InputType, Field } from '@nestjs/graphql';
import { PostStatus } from '@prisma/client';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  slug: string;

  @Field({ nullable: true })
  @IsOptional()
  excerpt?: string;

  @Field({ nullable: true })
  @IsOptional()
  content?: string;

  @Field(() => PostStatus, { nullable: true })
  @IsOptional()
  @IsEnum(PostStatus)
  status?: PostStatus;

  @Field({ nullable: true })
  @IsOptional()
  publishedAt?: Date;

  @Field({ nullable: true })
  @IsOptional()
  scheduledAt?: Date;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  // relations
  // @Field()
  // @IsUUID()
  // authorId: string;

  // @Field(() => [String], { nullable: true })
  // @IsOptional()
  // categoryIds?: string[];

  // @Field(() => [String], { nullable: true })
  // @IsOptional()
  // tagIds?: string[];
}
