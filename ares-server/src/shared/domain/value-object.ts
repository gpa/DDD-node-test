import { IBusinessRule, BusinessRuleValidationException } from './business-rule';

export class ValueObject {

    protected checkRule(businessRule: IBusinessRule) {
        if (businessRule.isBroken()) {
            throw new BusinessRuleValidationException(businessRule);
        }
    }
}

export class SingleValueObject<T> extends ValueObject {
    protected _value: T;

    public get value() {
        return this._value;
    }
}