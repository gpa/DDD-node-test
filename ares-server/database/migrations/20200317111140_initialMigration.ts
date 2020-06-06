import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable('users', t => {
        t.increments('id').primary();
        t.binary('uuid').unique();
        t.string('name').unique();
        t.string('email').unique();
        t.string('password');
        t.timestamps();
    });
}

export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTable('users');
}