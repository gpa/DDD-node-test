import { ICommand } from "src/shared/application";

export class ChangeUserPasswordCommand implements ICommand {

    public constructor(
        private readonly _userId: Number,
        private readonly _newPassword: string) {
    }

    get userId() {
        return this._userId;
    }

    get newPassword() {
        return this._newPassword;
    }
}