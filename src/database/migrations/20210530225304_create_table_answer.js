exports.up = (knex) => {

  return knex.schema.createTable('answers', (table) => {

    table.increments();

    table.string('content', 60).notNullable();

    table.integer("publishs_id").notNullable().unsigned();

    table.foreign('publishs_id')

      .references("publishs.id")

      .onDelete("restrict")

      .onUpdate("cascade")

    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('answers');
