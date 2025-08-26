import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolvers } from './auth.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AuthService, AuthResolvers],
  imports: [PrismaModule],
})
export class authModule {}
