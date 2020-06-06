import { IBusinessRule, BusinessRuleValidationException } from './business-rule';

export type EntityId = {
    id: Number;
}

export class Entity {

    protected _id: EntityId;

    protected checkRule(businessRule: IBusinessRule) {
        if (businessRule.isBroken()) {
            throw new BusinessRuleValidationException(businessRule);
        }
    }

    public get id() {
        return this._id;
    }
}