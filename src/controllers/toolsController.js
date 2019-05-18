const Tools = require("../models/Tools");

class ToolsController {
  async store(req, res) {
    const tools = await Tools.create(req.body);
    return res.json(tools);
  }

  async showTag(req, res) {
    const tools = await Tools.find({ tags: req.query.tag }, function(
      err,
      docs
    ) {});
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
    await Tools.findByIdAndRemove(req.params.id, (err, res2) => {
      return res.status(200).send();
    });
  }
}

module.exports = new ToolsController();
