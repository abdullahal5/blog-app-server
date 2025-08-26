import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInUserInput } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { createToken } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(dto: SignInUserInput) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!findUser) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const pwMatches = await argon.verify(findUser.password, dto.password);

    if (!pwMatches) {
      throw new HttpException('Credentials Incorrect', HttpStatus.UNAUTHORIZED);
    }

    const token = await createToken(findUser.id, findUser.email);

    return {
      accessToken: token.accessToken,
      role: findUser.role,
    };
  }
}
