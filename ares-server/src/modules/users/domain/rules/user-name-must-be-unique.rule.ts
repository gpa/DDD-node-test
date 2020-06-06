import { IBusinessRule } from 'src/shared/domain/business-rule';

export class UserNameMustBeUniqueRule implements IBusinessRule {

    public constructor(
        private readonly _name)
    {
    }

    public isBroken(): boolean {
        return false;
    }

    public getMessage(): string {
        return "The given username is already in use.";
    }
}