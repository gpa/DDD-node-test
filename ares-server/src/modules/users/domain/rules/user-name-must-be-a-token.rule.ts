import { IBusinessRule } from 'src/shared/domain/business-rule';

export class UserNameMustBeATokenRule implements IBusinessRule {

    public constructor(
        private readonly _name)
    {
    }

    public isBroken(): boolean {
        return false;
    }

    public getMessage(): string {
        return "Username must only contain alphanumerical characters dashes";
    }
}