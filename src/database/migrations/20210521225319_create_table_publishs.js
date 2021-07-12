exports.up = (knex) => {

  return knex.schema.createTable('publishs', (table) => {

    table.increments();

    table.string('audio').notNullable();

    table.integer("users_id").notNullable().unsigned();

    table.foreign('users_id')

      .references("users.id")

      .onDelete("restrict")

      .onUpdate("cascade")

    // cria os campos created_at e updated_at

    table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('publishs');
