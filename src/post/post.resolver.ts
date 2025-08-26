import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Post } from './post.types';
import { PostService } from './post.service';
import { CreatePostInput } from './dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guard';
import { CurrentUser } from 'src/auth/decorator';

@Resolver(() => Post)
export class PostResolvers {
  constructor(private postServices: PostService) {}

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  createPost(@Args('data') data: CreatePostInput, @CurrentUser() user: any) {
    console.log(user);
    return this.postServices.createPost(data);
  }
}
