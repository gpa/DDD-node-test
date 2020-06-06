export interface IBusinessRule {
    isBroken(): boolean;
    getMessage(): string;
}

export class BusinessRuleValidationException extends Error {
    public constructor(private readonly _brokenBusinessRule: IBusinessRule) {
        super(_brokenBusinessRule.getMessage());
    }
}