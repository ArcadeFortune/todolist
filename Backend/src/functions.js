const withDatabase = require("./accessDB");

async function findNextTask() {
  let result = [];
  await withDatabase(async (coll) => {
    const find = await coll.find({}).sort({ _id: 1 }).limit(1);
    for await (const doc of find) {
      result.push(doc);
    }
  });
  if (result.toString() === "") return 1;
  return result;
}

async function ls(taskId) {
  if (taskId) parseInt(taskId);

  let result = [];
  await withDatabase(async (coll) => {
    const find = await coll.find(taskId ? { _id: taskId } : {})
      .sort({ _id: 1 });
    for await (const doc of find) {
      result.push(doc);
    }
  });
  return result;
}

module.exports = {
  ls,
  findNextTask
};
