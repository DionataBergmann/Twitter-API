const express = require("express");
const routes = express.Router();
routes.use(express.json());
const UserController = require('./src/controllers/UserController');
const PubliController = require('./src/controllers/PubliController');
const LoginController = require('./src/controllers/LoginController');
const LikeController = require('./src/controllers/LikeController');
const AnswerController = require('./src/controllers/AnswerController');
const TokenVerify = require('./src/middleware/TokenVerify');
const cors = require("cors");
routes.use(cors());

routes
  .get("/users", UserController.index)
  .post("/users", UserController.store)
  .put("/users", TokenVerify, UserController.update)
  .delete("/users/:id", TokenVerify, UserController.destroy);

routes
  .post("/login", LoginController.store);

routes
  .get("/publis", PubliController.index)
  .post("/publis", PubliController.store)
  .delete("/publis/:id",  PubliController.destroy);

routes
  .get("/likes", LikeController.index)
  .post("/likes", TokenVerify, LikeController.store)
  .delete("/likes", TokenVerify, LikeController.destroy);

routes
  .get("/answer", AnswerController.index)
  .post("/answer", TokenVerify, AnswerController.store)
  .delete("/answer", TokenVerify, AnswerController.destroy)

module.exports = routes;
