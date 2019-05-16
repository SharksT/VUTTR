const Tools = require("../models/tools");

class ToolsController {
  async store(req, res) {
    const tools = await Tools.create(req.body);
    return res.json(tools);
  }

  async showTag(req, res) {
    const tools = await Tools.find({ tag: req.query.tag }, function(
      err,
      docs
    ) {}).sort({
      title: 1
    });
    return res.json(tools);
  }

  async show(req, res) {
    const parents = await Tools.parents;
    const tools = await Tools.find({}, function(err, docs) {}).sort({
      title: 1
    });
    return res.json(tools);
  }

  async delete(req, res) {
    try {
      await Tools.findByIdAndRemove(req.params.id, (err, res2) => {
        if (res2 === null && err === null) {
          return res.status(400).send({ error: "Tool not found" });
        } else {
          return res.status(200).send();
        }
      });
    } catch {
      return res.status(400).send({ error: "Tool not found" });
    }
  }
}

module.exports = new ToolsController();
