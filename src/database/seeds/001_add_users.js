
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Edecio', password: '123456', email: 'edecio@gmail.com', foto: 'NULL' },
        { username: 'Victor', password: '123456', email: 'victor@gmail.com', foto: 'NULL' },
        { username: 'Joao', password: '123456', email: 'joao@gmail.com', foto: 'NULL' },
        { username: 'Gabriela', password: '123456', email: 'gab@gmail.com', foto: 'NULL' },
      ]);
    });
};
