const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const parsePayload = createTodo.safeParse(payload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: payload.title,
    description: payload.description,
    completed: false,
  });
  res.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json(todos);
});

app.put("/completed", async (req, res) => {
  const payload = req.body;
  const parsePayload = updateTodo.safeParse(payload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});
app.listen(3000);
