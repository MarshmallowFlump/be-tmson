const apiRouter = require("express").Router();
const { getApi } = require("../controllers/api-controllers.js");

const usersRouter = require("./users-router.js");
const skillsRouter = require("./skills-router.js");
const tasksRouter = require("./tasks-router.js");
const tokensRouter = require("./tokens-router.js");

apiRouter.route("/").get(getApi);

apiRouter.use("/users", usersRouter);
apiRouter.use("/skills", skillsRouter);
apiRouter.use("/tasks", tasksRouter);
apiRouter.use("/tokens", tokensRouter);

module.exports = apiRouter;
