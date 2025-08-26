import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto';
import * as argon from 'argon2';
import { createToken } from 'src/utils';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async createUser(data: CreateUserInput) {
    const { password, ...rest } = data;

    const existingUser = await this.prisma.user.findUnique({
      where: { email: rest.email },
    });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const hash: string = await argon.hash(password);

    const user = await this.prisma.user.create({
      data: {
        name: rest.name,
        email: rest.email,
        password: hash,
        role: rest.role,
      },
    });

    const token = await createToken(user.id, user.email);

    return {
      accessToken: token.accessToken,
      role: user.role,
    };
  }
}
