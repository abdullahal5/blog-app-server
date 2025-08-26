import { JwtService } from '@nestjs/jwt';

export interface TokenResponse {
  accessToken: string;
}

export const createToken = async (
  userId: string,
  email: string,
): Promise<TokenResponse> => {
  const payload = { userId, email };

  const jwtService = new JwtService({
    secret: process.env.JWT_SECRET || 'fallback_secret',
  });

  const token = await jwtService.signAsync(payload, { expiresIn: '15m' });

  return {
    accessToken: token,
  };
};
