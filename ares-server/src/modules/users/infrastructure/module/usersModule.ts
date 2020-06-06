import * as Config from 'config';
import { Module } from '@nestjs/common';

import { decorateCommandHandler, DatabaseConnection, UserRepository, UserMapper, UnitOfWork } from '../';

import { ICommandBus, IQueryBus } from 'src/shared/application';
import { QueryBus, CommandBus } from 'src/shared/infrastructure';

import { SignUpCommandHandler } from '../../application';
import { UsersController } from '../../presentation';

const commandHandlers = [
];

const eventHandlers = [
]

const queryHandlers = [
]

const infrastructureProviders = [
  {
    provide: 'UserMapper',
    useClass: UserMapper
  },
  {
    provide: 'UserRepository',
    useClass: UserRepository
  },
  {
    provide: 'UserUniquenessChecker',
    useClass: UserRepository
  },
  {
    provide: 'UnitOfWork',
    useClass: UnitOfWork
  },
  {
    provide: 'DatabaseConnection',
    useClass: DatabaseConnection
  },
  {
    provide: 'DatabaseConnectionConfiguration',
    useValue: Config.get('database')
  },
  {
    provide: 'CommandBus',
    useClass: CommandBus
  },
  {
    provide: 'QueryBus',
    useClass: QueryBus
  }
]

@Module({
  imports: [
  ],
  providers: [
    ...infrastructureProviders,
    ...commandHandlers,
    ...eventHandlers,
    ...queryHandlers,
  ],
  controllers: [
    UsersController
  ]
})
export class UsersModule { }