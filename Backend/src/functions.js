const withDatabase = require("./accessDB");

async function findNextTask() {
  let collectionSize = 0;
  await withDatabase(async (coll) => {
    collectionSize = await coll.countDocuments();
  });
  return collectionSize + 1;
}

async function ls(taskId) {
  if (taskId) parseInt(taskId);

  let result = [];
  await withDatabase(async (coll) => {
    const find = await coll
      .find(taskId ? { _id: taskId } : {})
      .sort({ _id: 1 });
    for await (const doc of find) {
      result.push(doc);
    }
  });
  return result;
}

async function mk(task, id) {
  const newTask = {
    _id: id,
    task: task,
  };
  await withDatabase(async (coll) => {
    await coll.insertOne(newTask);
  });
  return newTask;
}

module.exports = {
  ls,
  findNextTask,
  mk,
};