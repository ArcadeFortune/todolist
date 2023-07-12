import { useEffect, useState, createContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [items, setItems] = useState([]);

  async function updateTasks() {
    let data = await listTasks();
    data.sort((a, b) => {
      return a._id - b._id;
    });
    setItems(data);
  }

  function getTasks() {
    return items;
  }

  async function listTasks() {
    const url = process.env.REACT_APP_BACKEND_URL;
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
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

  async function addTask(task) {
    const url = process.env.REACT_APP_BACKEND_URL;
    if (task === "") return;
    const newTask = {
      _id: await fetch(`${url}/available_tasks`).then((res) => res.json()),
      task: task,
    };

    try {
      const response = await fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`added task #${data._id} successfully`, data);
        await updateTasks();
      } else {
        console.error("POST request failed");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  }

  async function removeTask(id) {
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
        console.log(`removed task #${id} successfully`, data[0]);
        await updateTasks();
      } else {
        console.error("POST request failed");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  }

  async function editTask(task) {
    console.log(task)
  }

  

  // use ctrl + click to navigate this file
  return (
    <TaskContext.Provider
      value={{
        items,
        updateTasks,
        getTasks,
        listTasks,
        addTask,
        removeTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
