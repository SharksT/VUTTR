const express = require("express");
const routes = express.Router();
const authMiddleware = require("./middleware/auth");
const ToolsController = require("./controllers/toolsController");
const authController = require("./controllers/authController");

routes.post("/register", authController.create);
routes.post("/", authController.logIn);
routes.use(authMiddleware);
routes.get("/tools", ToolsController.show);
routes.get("/tools", ToolsController.showTag);
routes.post("/tools", ToolsController.store);
routes.post("/tools/:id", ToolsController.delete);
module.exports = routes;
