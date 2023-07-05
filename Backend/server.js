const express = require("express");
const cors = require("cors");
const db = require('./connection.js');

const app = express();

const PORT = 6969;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;
const connectionString = process.env.ATLAS_URI || "";
async function connectToClient() {
  const client = await new MongoClient(connectionString).connect();
  const db = client.db('todolist');
  return db;
}

app.get("/", async (req, res) => {
  const db = await connectToClient();
  console.log(db)
  // let collection = await db.collection("posts");
  // let results = await collection.find({}).toArray();
  let results = 'test'
  res.json({ message: "Welcome to ArcadeFortune application!!!!" + results});
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});