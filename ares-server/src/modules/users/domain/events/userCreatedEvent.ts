import { DomainEventBase } from 'src/shared/domain';
import { UserId } from '../userId';

export class UserCreatedDomainEvent extends DomainEventBase {

    constructor(private readonly _id: UserId) {
        super();
    }

    get id() {
        return this._id;
    }
}