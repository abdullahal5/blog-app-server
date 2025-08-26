import { AuthService } from './auth.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInUserInput } from './dto';
import { AuthResponse } from 'src/dto/auth-response';
import { User } from 'src/user/user.types';

@Resolver(() => User)
export class AuthResolvers {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  signin(@Args('data') data: SignInUserInput) {
    return this.authService.signIn(data);
  }
}
