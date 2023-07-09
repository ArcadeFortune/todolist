import { useState } from "react";
import list from "../functions/list";

function useTaskManager() {
  const [items, setItems] = useState();

  async function updateTasks() {
    console.log("button clicked");
    let data = await list();
    data.sort((a, b) => {
      return a._id - b._id;
    });
    setItems(data);
    console.log(data);
  }

  function getTasks() {
    return items;
  }

  async function remove(id) {
    const url = process.env.REACT_APP_BACKEND_URL;
    try {
      const response = await fetch(`${url}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("deleted task successfully", data);
        console.log("HALLO");
        // await updateTasks()
        return data;
      } else {
        console.error("POST request failed");
        return "there is an error";
      }
    } catch (error) {
      console.error("Network error", error);
      return "there is a network error";
    }
  }



  
  return {
    updateTasks,
    getTasks,
    remove,
  };
}

export default useTaskManager;
