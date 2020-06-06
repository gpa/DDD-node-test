import { IBusinessRule, BusinessRuleValidationException } from './businessRule';

export abstract class ValueObject<T> {
    
    protected readonly _data: T;

    public get value() {
        return this._data;
    }

    public constructor(data: T) {
        this._data = Object.freeze(data);
    }

    public equals(object: ValueObject<T>): boolean {
        if (object === null || object === undefined) {
            return false;
        }
        if (object._data === undefined) {
            return false;
        }
        return JSON.stringify(this._data) === JSON.stringify(object._data);
    }

    protected async checkRule(businessRule: IBusinessRule) {
        return ValueObject.checkRule(businessRule);
    }

    protected static async checkRule(businessRule: IBusinessRule) {
        if (await businessRule.isBroken()) {
            throw new BusinessRuleValidationException(businessRule);
        }
    }
}