import { Entity } from '../domain';

export interface IMapper<T extends Entity> {

    toDomain(persistence: object): T;

    toPersistence(entity: T): object;
}