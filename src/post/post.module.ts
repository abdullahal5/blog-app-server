import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolvers } from './post.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PostService, PostResolvers],
  imports: [PrismaModule],
})
export class PostModule {}
