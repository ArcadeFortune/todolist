const withDatabase = require("./accessDB");

async function ls() {
  let result = [];
  await withDatabase(async (coll) => {
    const find = await coll.find().sort({ _id: 1 });
    for await (const doc of find) {
      console.log(doc);
      result.push(doc);
    }
  });
  return result
}

module.exports = {
  ls,
};
