import {
    User,
    UserId,
    UserName,
    UserEmail,
    UserPassword,
    IUserRepository,
    IUserUniquenessChecker
} from '../domain';

import { RegisterNewUserCommand } from './commandApi/registerNewUserCommand';
import { LogUserInCommand } from './commandApi/logUserInCommand';
import { LogUserOutCommand } from './commandApi/logUserOutCommand';
import { ChangeUserPasswordCommand } from './commandApi/changeUserPasswordCommand';
import { ChangeUserEmailCommand } from './commandApi/changeUserEmailCommand';

// user module can nestjs export a AuthService for session checking
// and perhaps the integration events so that instead of importing them
// the module will be imported but the users module will then export only the 
// things that should be exported.

// Also we need a database and config module that other modules will import for the monolith
// not sure where we would put them tho.
// Altho I'm not sure if its a good idea.

// Thing of spreading the code into more nestjs modules

// repositorories should not commit, repository client should control transaction control

// need version control and concurrency conflict resolution

export class UserApplicationService {

    private _userRepository: IUserRepository;

    public constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    public async register(registerNewUserCommand: RegisterNewUserCommand) {

        const userId = new UserId(this._userRepository.getNextIdentity());
        const userName = new UserName(registerNewUserCommand.name);
        const userEmail = new UserEmail(registerNewUserCommand.email);
        const userPassword = new UserPassword(registerNewUserCommand.password);

        const user = await User.register(
            userId,
            userName,
            userEmail,
            userPassword,
            <IUserUniquenessChecker>this._userRepository
        );

        await this._userRepository.save(user);
        return user.id.value;
    }

    public async logIn(logUserInCommand: LogUserInCommand) {
    }

    public async logOut(logUserOutCommand: LogUserOutCommand) {
    }

    public async changePassword(changeUserPasswordCommand: ChangeUserPasswordCommand) {

        const userId = new UserId(changeUserPasswordCommand.userId);
        const newPassword = new UserPassword(changeUserPasswordCommand.newPassword);

        const user = await this._userRepository.getById(userId);
        user.changePassword(newPassword);

        await this._userRepository.save(user);
    }

    public async changeEmail(changeUserEmailCommand: ChangeUserEmailCommand) {

        const userId = new UserId(changeUserEmailCommand.userId);
        const newEmail = new UserEmail(changeUserEmailCommand.newEmail);

        const user = await this._userRepository.getById(userId);
        user.changeEmail(newEmail, <IUserUniquenessChecker>this._userRepository);

        await this._userRepository.save(user);
    }
}