import { IQueryBus } from '../application/queryBus';
import { IQuery } from '../application/query';

export class QueryBus implements IQueryBus {
    execute<T extends IQuery>(query: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
}