import { ICommand } from '@nestjs/cqrs';
import { RegisterUserRequestDto } from 'src/modules/users/application/use-cases/commands/register-user/register-user.dto';

export class RegisterUserCommand implements ICommand {

    constructor(
        private readonly _name,
        private readonly _email,
        private readonly _password) 
    {
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
}