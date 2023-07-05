const tasks = require("./functions")
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 6969;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  console.log('Hello World')
  // await withDatabase(async (coll) => {
  //   console.log('in function')
  //   const res = await coll.find();
  //   for await (const doc of res) {
  //     console.log(doc);
  //   }
  //   const customIdDocument = { _id: "3", key: "cleanign" };
  //   await coll.insertOne(customIdDocument);
  //   console.log(coll, 'htset')
  // })
  
  res.json({ message: "Welcome to ArcadeFortune application!!!!\nWatch Date A Live"});
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});