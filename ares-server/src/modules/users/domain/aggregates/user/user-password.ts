import { SingleValueObject } from 'src/shared/domain/value-object';

export class UserPassword extends SingleValueObject<string> {

    public constructor(name: string) {
        super();
        this._value = name;
    }
}