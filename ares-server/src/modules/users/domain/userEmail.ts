import { ValueObject, Guard } from 'src/shared/domain';

export class UserEmail extends ValueObject<string> {

    public constructor(email: string) {
        Guard.againstNullOrUndefined(email);
        Guard.againstInvalidEmail(email);
        super(email);
    }
}