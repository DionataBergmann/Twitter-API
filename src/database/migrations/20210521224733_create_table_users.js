exports.up = (knex) => {

  return knex.schema.createTable('users', (table) => {

    table.increments();

    table.string('username', 60).notNullable();
    table.string('password', 60).notNullable();
    table.string('email', 60).unique().notNullable();
    table.string('foto').notNullable();
    table.timestamps(true, true);

  });

};

exports.down = (knex) => knex.schema.dropTable('users');