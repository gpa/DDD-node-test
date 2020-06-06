import { ICommand } from "src/shared/application";

export class LogUserOutCommand implements ICommand {

    public constructor(
        private readonly _sessionId: Number) {
    }

    get sessionId() {
        return this._sessionId;
    }
}