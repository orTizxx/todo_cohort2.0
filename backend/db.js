const mongoose = require("mongoose");
const { db } = require("./config");

mongoose.connect(db);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
