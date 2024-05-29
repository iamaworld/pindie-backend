// Создаём роут для запросов пользователей
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const findAllUsers = require("../middlewares/users");
const { sendAllUsers } = require("../controllers/users");
const createUser = require("../middlewares/users");
const { sendUserCreated } = require("../controllers/users");
const findUserById = require("../middlewares/users");
const { sendUserById } = require("../controllers/users");
const updateUser = require("../middlewares/users");
const sendUserUpdated = require("../middlewares/users");
const deleteUser = require("../middlewares/users");
const sendUserDeleted = require("../middlewares/users");
const checkIsUserExists = require("../middlewares/users");
const checkEmptyNameAndEmailAndPassword = require("../middlewares/users");
const checkEmptyNameAndEmail = require("../middlewares/users");
const hashPassword = require("../middlewares/users");

const { checkAuth } = require("../middlewares/auth");
const { sendMe } = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
module.exports = usersRouter;
