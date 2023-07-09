const withDatabase = require("./accessDB");

async function findNextTask() {
  let collectionSize;
  await withDatabase(async (coll) => {
    collectionSize = await coll.aggregate([
      { $group: { _id: null, maxId: { $max: '$_id' } } },
      { $project: { _id: '$maxId' } }
    ]).toArray()
  });
  return parseInt(collectionSize[0]._id) + 1;
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

async function rm(id) {
  let deletedTask = await ls(id)
  await withDatabase(async (coll) => {
    await coll.deleteOne({ _id: id });
  });
  return deletedTask;
}

module.exports = {
  ls,
  findNextTask,
  mk,
  rm,
};
