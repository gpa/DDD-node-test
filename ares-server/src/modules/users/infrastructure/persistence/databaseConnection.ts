import * as Knex from 'knex';
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class DatabaseConnection {

    private readonly _connection: Knex;

    public constructor(
        @Inject('DatabaseConnectionConfiguration')
        private readonly _configuration: any)
    {
        this._connection = Knex(_configuration)
    }

    public get(): Knex {
        return this._connection;
    }
}