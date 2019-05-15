const express = require("express");
const routes = express.Router();

const ToolsController = require("./controllers/toolsController");

routes.get("/tools", ToolsController.show);
routes.get("/tag/:id", ToolsController.showTag);
routes.post("/tools", ToolsController.store);
routes.post("/tools/:id", ToolsController.delete);
module.exports = routes;
