import { IEvent } from 'src/shared/domain/domain-event'; 
import { EntityId } from 'src/shared/domain/entity';

export class UserCreatedEvent implements IEvent {

    public constructor(
        private readonly _id: EntityId)
    {
    }

    public get id() {
        return this._id;
    }
}