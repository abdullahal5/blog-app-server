import { JwtService } from '@nestjs/jwt';

export interface TokenResponse {
  accessToken: string;
}

export const createToken = async (
  userId: string,
  email: string,
): Promise<TokenResponse> => {
  const payload = { userId, email };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const jwtService = new JwtService({
    secret: process.env.JWT_SECRET || 'fallback_secret',
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const token = await jwtService.signAsync(payload, { expiresIn: '15m' });

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    accessToken: token,
  };
};
