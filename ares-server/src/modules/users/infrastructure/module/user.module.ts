import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from 'src/modules/users/infrastructure/persistence/user.repository';
import { RegisterUserCommandHandler } from 'src/modules/users/application/command-use-cases/register-user/register-user.handler';

const commandHandlers = [
    RegisterUserCommandHandler
];

const eventHandlers = [
]

const queryHandlers = [
]

const sagas = [
]

@Module({
  imports: [
    CqrsModule
  ],
  providers: [
    UserRepository,
    ...commandHandlers,
    ...eventHandlers,
    ...queryHandlers,
    sagas,
  ],
})
export class UsersModule { }