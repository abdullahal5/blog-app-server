import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignInUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
