const withDatabase = require("./accessDB");

async function findNextTask() {
  let collectionSize;
  await withDatabase(async (coll) => {
    collectionSize = await coll.findOne({}, { sort: { _id: -1 } });
  });
  if (!collectionSize) return 1;
  return parseInt(collectionSize._id) + 1
  //  > 0 ? collectionSize[0].maxId + 1 : 1;
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
  console.log(id)
  let deletedTask = await ls(id)
  await withDatabase(async (coll) => {
    console.log(id)
    await coll.deleteOne({ _id: parseInt(id) });
  });
  return deletedTask;
}

module.exports = {
  ls,
  findNextTask,
  mk,
  rm,
};
