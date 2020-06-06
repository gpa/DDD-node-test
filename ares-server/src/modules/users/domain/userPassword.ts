import { ValueObject, Guard } from 'src/shared/domain';

export class UserPassword extends ValueObject<string> {

    public constructor(password: string) {
        Guard.againstNullOrUndefined(password);
        Guard.againstWeakPassword(password);
        super(password);
    }
}