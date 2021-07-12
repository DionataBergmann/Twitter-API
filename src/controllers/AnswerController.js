const knex = require('../database/dbConfig');

module.exports = {
  //index: listagem
  //store/create: inclusão
  //update: alteração
  //show: obter 1 registro
  //destroy: exclusão

  async index(req, res) {
    const likes = await knex("answers").orderBy("id", "desc");
    res.status(200).json(likes);
  },

  async store(req, res) {
    const { content, publishs_id } = req.body;

    try {
      const newAnswer = await knex("answers").insert({ content, publishs_id });
      res.status(201).json({ id: newAnswer[0] })
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  async destroy(req, res) {
    const { id } = req.body;

    try {
      await knex('answers').del().where({ id });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ ok: 0, msg: `Erro na exclusão: ${error.message}` });
    }
  },

}