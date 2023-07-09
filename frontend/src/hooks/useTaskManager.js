import { useState } from "react";
import list from "../functions/list";

function useTaskManager() {
  const [items, setItems] = useState();

  async function updateTasks() {
    console.log('button clicked')
    let data = await list();
    data.sort((a, b) => {
      return a._id - b._id;
    });
    setItems(data);
    console.log(data);
  }

  async function updateTasks2() {
    console.log('button clicked')
  }

  function getTasks() {
    return items;
  }

  return {
    updateTasks,
    getTasks,
    updateTasks2,
  };
}

export default useTaskManager;
