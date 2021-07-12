const knex = require('../database/dbConfig');

module.exports = {
  //index: listagem
  //store/create: inclusão
  //update: alteração
  //show: obter 1 registro
  //destroy: exclusão

  async index(req, res) {
    const likes = await knex("likes").orderBy("id", "desc");
    res.status(200).json(likes);
  },

  async store(req, res) {
    const { publishs_id, users_id } = req.body;

    try {
      const newLike = await knex("likes").insert({ publishs_id, users_id });
      res.status(201).json({ id: newLike[0] })
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  async destroy(req, res) {
    const { id } = req.body;

    try {
      await knex('likes').del().where({ id });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ ok: 0, msg: `Erro na exclusão: ${error.message}` });
    }
  },

}