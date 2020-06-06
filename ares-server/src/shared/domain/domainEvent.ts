
export interface IDomainEvent {
    occuredOn: Date;
}

export class DomainEventBase implements IDomainEvent {
    
    private _occuredOn: Date;
    
    public constructor() {
        this._occuredOn = new Date();
    }

    public get occuredOn() {
        return this._occuredOn;
    }
}