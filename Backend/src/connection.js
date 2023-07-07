const { MongoClient, ServerApiVersion } = require("mongodb");
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = client;
