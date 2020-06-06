import { Controller, Body, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterUserCommand } from 'src/modules/users/application/command-use-cases/register-user/register-user.command';

@Controller('users')
export class UsersController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus) 
  {}

  @Post()
  async create(@Body() body: any) {
    return await this.commandBus.execute(
        new RegisterUserCommand(
            body['name'],
            body['email'],
            body['password'])
    );
  }
}