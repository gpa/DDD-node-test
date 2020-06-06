import { Controller, Body, Post, Get, Inject } from '@nestjs/common';
import { IQueryBus } from 'src/shared/application/queryBus';
import { ICommandBus } from 'src/shared/application/commandBus';
import { SignUpCommand } from '../application/register/signUpCommand';


@Controller('users')
export class UsersController {

  constructor(
    @Inject('CommandBus')
    private readonly _commandBus: ICommandBus,
    @Inject('QueryBus')
    private readonly _queryBus: IQueryBus) 
  {
  }

  @Get()
  async get() {

    const result = await this._commandBus.execute(new SignUpCommand(
      "aa",
      "bb",
      "cc"
    ));

    return result;
  }

  @Post()
  async create(@Body() body: any) {
  }
}