const knex = require('../database/dbConfig');

module.exports = {
  //index: listagem
  //store/create: inclusão
  //update: alteração
  //show: obter 1 registro
  //destroy: exclusão

  async index(req, res) {
    const publis = await knex("publishs")
      .select("p.id", "p.users_id", "u.username", "p.audio", "p.created_at")
      .from("publishs as p")
      .leftJoin("users as u", "p.users_id", "u.id")
      .orderBy("p.id", "desc");
    res.status(200).json(publis);
  },

  async store(req, res) {
    console.log(req.body);
    const { audio, users_id } = req.body;
    console.log(audio, users_id)
    try {
      const novo = await knex("publishs").insert({ audio, users_id });
      res.status(201).json(novo)
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  async destroy(req,res){
    const id = req.params.id
  
    try {
     await knex("publishs").del().where({id})
      res.status(200).json({ok:1,msg:"Publi Deletada"});
    } catch (error) {
      res.status(400).json({ erro: error.message });
        }
      }

};