const client = require("./connection.js");
async function withDatabase(callback) {
  console.log('in accessdb')
  try {
    console.log('in try')
    await client.connect();
    const db = await client.db("todolist");
    const coll = db.collection("tasks");
    // const myDB = client.db("myDB");
    
    await callback(coll)
  } finally {
    console.log('in finally')
    await client.close();
  }
}

module.exports = withDatabase