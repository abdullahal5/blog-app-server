import { registerEnumType } from '@nestjs/graphql';
import { PostStatus, UserRole } from '@prisma/client';

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'User role types',
});

registerEnumType(PostStatus, {
  name: 'PostStatus',
  description: 'Post status types',
});
