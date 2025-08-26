import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import '../enum/index';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
})
export class UserModule {}
