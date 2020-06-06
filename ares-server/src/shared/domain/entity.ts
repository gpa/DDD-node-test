import { IBusinessRule, BusinessRuleValidationException } from './businessRule';
import { IDomainEvent } from './domainEvent';

export abstract class Entity {

    private _domainEvents: IDomainEvent[];

    public getDomainEvents() {
        return this._domainEvents;
    }

    public addDomainEvent(domainEvent: IDomainEvent) {
        this._domainEvents.push(domainEvent);
    }

    public clearDomainEvents() {
        this._domainEvents = [];
    }

    protected async checkRule(businessRule: IBusinessRule) {
        return Entity.checkRule(businessRule);
    }

    protected static async checkRule(businessRule: IBusinessRule) {
        if (await businessRule.isBroken()) {
            throw new BusinessRuleValidationException(businessRule);
        }
    }
}