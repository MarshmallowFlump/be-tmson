const tasksRouter = require("express").Router();
// const {} = require("../controllers/tasks-controllers.js");

tasksRouter
  .route("/")
  .get((req, res) => {
    res.status(200).send("All OK from POST /api/tasks");
  })
  .post((req, res) => {
    res.status(200).send("All OK from POST /api/tasks");
  })
  .patch((req, res) => {
    res.status(200).send("All OK from PATCH /api/tasks");
  });

tasksRouter
  .route("/:task")
  .get((req, res) => {
    res.status(200).send("All OK from GET /api/tasks/:username");
  })
  .patch((req, res) => {
    res.status(200).send("All OK from PATCH /api/tasks/:username");
  });

module.exports = tasksRouter;
