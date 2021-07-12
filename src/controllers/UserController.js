const bcrypt = require('bcrypt');
const knex = require('../database/dbConfig');
// const jwt = require('jsonwebtoken');

module.exports = {
  //index: listagem
  //store/create: inclusão
  //update: alteração
  //show: obter 1 registro
  //destroy: exclusão

  async index(req, res) {
    const users = await knex('users');
    res.status(200).json(users);
  },

  async store(req, res) {
    const { username, password, email } = req.body;
    console.log(username, password, email);
    if (!username || !password || !email) {
      res.status(400).json({ erro: "Preencher todos os campos" });
      return;
    }

    try {
      const dados = await knex("users").where({ email });
      if (dados.length) {
        res.status(400).json({ erro: "E-mail já cadastrado" });
        return;
      }
    } catch (error) {
      res.status(400).json({ erro: error.message });
      return;
    }
    const foto = 'NULL';
    const hash = bcrypt.hashSync(password, 10);

    try {
      const novo = await knex("users").insert({ username, password: hash, email, foto });
      console.log(novo);
      res.status(201).json(novo);
    } catch (error) {
      res.status(200).json({ erro: error.message });
    }
  },

  async update(req, res) {
    const { id, username, email, password, foto } = req.body;

    try {
      const oldEmail = await knex('users').where({ email });
      if (oldEmail.length && id != oldEmail.id) {
        res.status(400).json({ erro: "E-mail já cadastrado" });
        return;
      }
      const updatedUser = await knex('users')
        .update({ username, email, password, foto })
        .where({ id });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ ok: 0, msg: `Erro na alteração: ${error.message}` });
    }
  },

  async destroy(req, res) {
    const { id } = req.body;

    try {
      await knex('users').del().where({ id });
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ ok: 0, msg: `Erro na exclusão: ${error.message}` });
    }
  },
};
