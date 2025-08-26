import { registerEnumType } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'User role types',
});
