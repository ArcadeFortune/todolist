const express = require("express");
const cors = require("cors");
const withDatabase = require("./accessDB")

const app = express();
const PORT = 6969;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  console.log('in endpoint')
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

app.get('/tasks', async (req, res) => {
  let result = []
  await withDatabase(async (coll) => {
    const find = await coll.find().sort({ _id: 1 });
    for await (const doc of find) {
      console.log(doc)
      result.push(doc)
    }
  })
  res.json(result)
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});