import { SingleValueObject } from 'src/shared/domain/value-object';

export class UserEmail extends SingleValueObject<string> {

    private _isConfirmed: boolean;

    private _confirmationToken: string;

    public constructor(email: string) {
        super();
        this._value = email;
    }
}