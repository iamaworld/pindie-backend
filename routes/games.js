// Файл routes/games.js

const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  sendGameUpdated,
  deleteGame,
  sendGameDeleted,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest,
} = require("../middlewares/games");

const sendAllGames = require("../controllers/games");
const sendGameCreated = require("../controllers/games");
const sendGameById = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");

gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
module.exports = gamesRouter;
