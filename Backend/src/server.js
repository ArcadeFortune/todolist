const tasks = require("./functions")
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 6969;

var corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  console.log('Hello World')
  
  res.json({ message: "Welcome to ArcadeFortune application!!!\nWatch Date A Live"});
});

// get tasks
app.get('/tasks', async (req, res) => {
  res.json(await tasks.ls())
})

// get task by ID
app.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  res.json(await tasks.ls(taskId))
})

// add task by ID
app.post('/tasks', async (req, res) => {
  res.json(await tasks.mk(req.body.task, req.body._id))
})

app.patch('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  // remove the task and add it again
  await tasks.rm(taskId)
  res.json(await tasks.mk(req.body.task, req.body._id))
})

// remove task by ID
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  res.json(await tasks.rm(taskId))
})

// get available tasks
app.get('/available_tasks', async (req, res) => {
  res.json(await tasks.findNextTask())
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});