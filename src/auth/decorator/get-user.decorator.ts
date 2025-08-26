import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface CurrentUserPayload {
  userId: string;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): CurrentUserPayload => {
    const context = ctx.getArgByIndex(2);
    const req = context.req;

    const authHeader = req.headers['authorization'];
    if (!authHeader)
      throw new UnauthorizedException('Authorization header missing');

    const token = authHeader.split(' ')[1] as string;
    if (!token) throw new UnauthorizedException('Token missing');

    try {
      const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
      const decoded = jwtService.verify<CurrentUserPayload>(token);
      return decoded;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  },
);
