import { ICommand } from "src/shared/application";

export class RegisterNewUserCommand implements ICommand {

    public constructor(
        private readonly _name: string,
        private readonly _email: string,
        private readonly _password: string) {
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