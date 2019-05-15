const mongoose = require("mongoose");

const Tools = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Tools", Tools);
