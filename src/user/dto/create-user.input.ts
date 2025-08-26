import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => UserRole, { nullable: true })
  role: UserRole;
}
