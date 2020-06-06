import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';

import { RegisterUserCommand } from 'src/modules/users/application/use-cases/commands/register-user/register-user.command';
import { User } from 'src/modules/users/domain/user-aggregate/user';
import { IUserRepository} from 'src/modules/users/domain/user-aggregate/user.repository';
import { UserName } from 'src/modules/users/domain/user-aggregate/user-name';
import { UserEmail } from 'src/modules/users/domain/user-aggregate/user-email';
import { UserPassword } from 'src/modules/users/domain/user-aggregate/user-password';

@CommandHandler(RegisterUserCommand)
export class RegisterUserCommandHandler implements ICommandHandler<RegisterUserCommand> {

    constructor(
        @Inject('UserRepository') 
        private readonly _userRepository: IUserRepository,
        private readonly _publisher: EventPublisher) 
    {
    }

    public async execute(registerUserCommand: RegisterUserCommand) {

        const { name, email, password} = registerUserCommand;
        
        const user = User.register(
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password)
        );

        const userEntity = await this._userRepository.save(user);
        this._publisher.mergeObjectContext(userEntity).commit();
    }
}