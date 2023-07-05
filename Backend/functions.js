const withDatabase = require("./accessDB");

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
};
