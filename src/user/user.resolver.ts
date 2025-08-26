import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './user.service';
import { User } from './user.types';
import { CreateUserInput } from './dto';
import { AuthResponse } from 'src/dto/auth-response';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async allUsers() {
    return await this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  async singleUser(@Args('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Mutation(() => AuthResponse)
  async createUser(@Args('data') data: CreateUserInput) {
    return await this.usersService.createUser(data);
  }
}
