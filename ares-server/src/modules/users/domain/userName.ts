import { ValueObject, Guard } from 'src/shared/domain';

export class UserName extends ValueObject<string> {

    public constructor(name: string) {
        Guard.againstNullOrUndefined(name);
        Guard.againstInvalidToken(name);
        super(name);
    }
}