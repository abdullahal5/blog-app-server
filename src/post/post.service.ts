import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  createPost(data: CreatePostInput) {
    return data;
  }
}
