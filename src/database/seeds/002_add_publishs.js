
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('publishs').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishs').insert([
        { audio: 'NULL', users_id: 13 },
        { audio: 'NULL', users_id: 14 },
        { audio: 'NULL', users_id: 15 },
      ]);
    });
};
//aula 15 - 1:16:44