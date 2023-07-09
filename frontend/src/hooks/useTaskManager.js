import { useState } from "react";

function useTaskManager() {
  const [items, setItems] = useState();

  async function updateTasks() {
    console.log("button clicked");
    let data = await listTasks();
    data.sort((a, b) => {
      return a._id - b._id;
    });
    setItems(data);
    console.log(data);
  }

  function getTasks() {
    return items;
  }

  async function listTasks() {
    const url = process.env.REACT_APP_BACKEND_URL
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {  
        const data = await response.json()
        console.log("fetched tasks successfully", data)
        return data
      } else {
        console.error("POST request failed");
        return 'there is an error'
      }
    } catch (error) {
      console.error("Network error", error);
      return 'there is a network error'
    }
  }

  async function removeTask(id) {
    const url = process.env.REACT_APP_BACKEND_URL
    try {
      const response = await fetch(`${url}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {  
        const data = await response.json()
        console.log(`removed task #${id} successfully`, data)
        console.log("HALLO")
        // await updateTasks()
        return data
      } else {
        console.error("POST request failed");
        return 'there is an error'
      }
    } catch (error) {
      console.error("Network error", error);
      return 'there is a network error'
    }
  }

  async function addTask(task) {
    const url = process.env.REACT_APP_BACKEND_URL
    if (task === "") return;
    const newTask = {
      _id: await fetch(`${url}/available_tasks`).then(res => res.json()),
      task: task,
    }
  
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
  
      if (response.ok) {  
        // Handle successful response
        console.log("added task successfully", await response.json());
      } else {
        // Handle error response
        console.error("POST request failed");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  }




  // use ctrl + click to navigate this file
  return {
    updateTasks,
    getTasks,
    listTasks,
    addTask,
    removeTask,
  };
}

export default useTaskManager;
