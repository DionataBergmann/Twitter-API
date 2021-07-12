exports.up = (knex) => {

  return knex.schema.createTable('likes', (table) => {

    table.increments();

    table.integer("users_id").notNullable().unsigned();

    table.foreign('users_id')

      .references("users.id")

      .onDelete("restrict")

      .onUpdate("cascade")

    table.integer("publishs_id").notNullable().unsigned();

    table.foreign('publishs_id')

      .references("publishs.id")

      .onDelete("restrict")

      .onUpdate("cascade")

    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('likes');
