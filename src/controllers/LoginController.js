const bcrypt = require('bcrypt');
const knex = require('../database/dbConfig');
const jwt = require('jsonwebtoken');

module.exports = {

  async store(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ erro: "Digite E-mail e senha" });
      return;
    }

    try {
      const dados = await knex('users').where({ email });
      if (!dados.length) {
        res.status(200).json({ erro: "Erro com credenciais" });
        return;
      }

      if (bcrypt.compareSync(password, dados[0].password)) {
        const token = jwt.sign({
          user_id: dados[0].id,
          user_name: dados[0].username,
        },
          process.env.JWT_KEY,
          { expiresIn: "24h" }
        );

        res.status(201).json({ token, username: dados[0].username, id: dados[0].id });
      } else {
        res.status(200).json({ erro: "Senha incorreta" });
      }

    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },
}

