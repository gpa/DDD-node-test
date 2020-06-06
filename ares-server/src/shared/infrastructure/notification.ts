import { IDomainEvent } from '../domain';

export interface INotification {
}

export class NotificationBase<T extends IDomainEvent> implements INotification {

    private _domainEvent: T;

    public constructor(domainEvent: T) {
        this._domainEvent = domainEvent;
    }
}