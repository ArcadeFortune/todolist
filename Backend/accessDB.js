const client = require("./connection.js");

async function withDatabase(callback) {
  try {
    await client.connect();
    const db = await client.db("todolist");
    const coll = db.collection("tasks");

    await callback(coll);
  } finally {
    await client.close();
  }
}

module.exports = withDatabase;
