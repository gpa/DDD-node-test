import * as Knex from 'knex';
import { Injectable, Scope } from '@nestjs/common';

import { IUnitOfWork } from 'src/shared/infrastructure';
import { DatabaseConnection } from './databaseConnection';

@Injectable({ scope: Scope.REQUEST })
export class UnitOfWork implements IUnitOfWork {

    private _transaction: Knex.Transaction;
    private _databaseConnection: DatabaseConnection;

    public constructor(databaseConnection: DatabaseConnection) {
        this._databaseConnection = databaseConnection;
    }

    public async getTransaction(): Promise<Knex.Transaction> {
        if (this._transaction == null)
            this._transaction = await this._databaseConnection.get().transaction();

        return this._transaction;
    }

    public async commit() {
        await this._transaction.commit();
    }

    public async rollback() {
        await this._transaction.rollback();
    }
}