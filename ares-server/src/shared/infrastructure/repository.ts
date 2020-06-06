import { IAggregateRoot } from 'src/shared/domain/aggregate-root';
import { EntityId } from 'src/shared/domain/entity';

export interface ICRUDRepository<T extends IAggregateRoot> {

    contains(entityId: EntityId): Promise<boolean>;

    getById(entityId: EntityId): Promise<T>;

    save(entity: T): Promise<T>;

    delete(entityId: EntityId): Promise<void>;
}

export interface IValueCounter {
    getCount(value: string): Promise<Number>;
}