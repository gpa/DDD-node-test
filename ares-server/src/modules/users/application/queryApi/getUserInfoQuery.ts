import { IQuery } from 'src/shared/application';

export class GetUserInfoQuery implements IQuery {

    public constructor(
        private readonly _userId: Number) {
    }

    get userId() {
        return this._userId;
    }
}