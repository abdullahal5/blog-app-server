import { Field } from '@nestjs/graphql';

export class Signin {
  @Field()
  email?: string;

  @Field()
  password: string;
}
