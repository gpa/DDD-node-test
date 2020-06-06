import { INotification } from 'src/shared/infrastructure';

export interface IIntegrationEvent {
}

export class IntegrationEventBase<T extends INotification> implements IIntegrationEvent {

    protected _notification: T;

    constructor(notification: T) {
        this._notification = notification;            
    }
}