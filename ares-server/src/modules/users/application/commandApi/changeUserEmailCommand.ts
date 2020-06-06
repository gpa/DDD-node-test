import { ICommand } from "src/shared/application";

export class ChangeUserEmailCommand implements ICommand {

    public constructor(
        private readonly _userId: Number,
        private readonly _newEmail: string) {
    }

    get userId() {
        return this._userId;
    }

    get newEmail() {
        return this._newEmail;
    }
}