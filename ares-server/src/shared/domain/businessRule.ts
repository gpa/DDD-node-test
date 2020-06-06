
export interface IBusinessRule {
    isBroken(): boolean|Promise<boolean>;
    getMessage(): string;
}

export class BusinessRuleValidationException extends Error {
    public constructor(private readonly _brokenBusinessRule: IBusinessRule) {
        super(_brokenBusinessRule.getMessage());
    }

    public get brokenRule() {
        return this._brokenBusinessRule;
    }
}
