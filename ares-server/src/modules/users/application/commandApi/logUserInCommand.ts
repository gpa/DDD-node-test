import { ICommand } from "src/shared/application";

export class LogUserInCommand implements ICommand {

    public constructor(
        private readonly _name: Number,
        private readonly _password: string) {
    }

    get name() {
        return this._name;
    }

    get password() {
        return this._password;
    }
}