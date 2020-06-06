import { ValueObject, Guard } from 'src/shared/domain';

export class UserId extends ValueObject<Number> {

    public constructor(identifier: Number) {
        Guard.againstNullOrUndefined(identifier);
        super(identifier);
    }
}
