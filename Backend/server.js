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

app.get("/", (req, res) => {
  res.json({ message: "Welcome to ArcadeFortune application!!!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

// import { MongoClient } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);

// let conn;
// try {
//   conn = await client.connect();
// } catch(e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

// export default db;