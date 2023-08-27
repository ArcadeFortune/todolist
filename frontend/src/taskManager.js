import { useState, createContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [items, setItems] = useState([]);
  const url = window._env_.REACT_APP_BACKEND_URL;

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
    if (JSON.parse(localStorage.getItem('localStorage')))
      try{ return JSON.parse(localStorage.getItem("list"));}
      catch{
        localStorage.clear()
        return JSON.parse(localStorage.getItem("list"));
      }
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error("GET request failed");
        return "there is an error";
      }
    } catch (error) {
      console.error("Network error", error);
      return "there is a network error";
    }
  }

  async function addTask(task) {
    if (task === "") return;

    //use localStorage
    if (JSON.parse(localStorage.getItem('localStorage'))) {
      let list = await JSON.parse(localStorage.getItem("list")) //get the list
      list.push({_id: list.length + 1, task: task}) //add to the list
      localStorage.setItem("list", JSON.stringify(list)) //save the list
      console.log(`added task #${list.length + 1} successfully`, list[list.length - 1]);
      await updateTasks();
      return;
    }
    try {
      const newTask = {
        _id: await fetch(`${url}/available_tasks`).then((res) => res.json()),
        task: task,
      };
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
    if (JSON.parse(localStorage.getItem('localStorage'))) {
      let list = await JSON.parse(localStorage.getItem("list")) //get the list
      const taskToRemove = list.find(task => task._id === id); //for logging purposes
      const newList = list.filter(task => task._id !== id); //remove from the list
      localStorage.setItem("list", JSON.stringify(newList)) //save the list
      console.log(`removed task #${id} successfully`, taskToRemove);
      await updateTasks();
      return;
    }
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
        console.error("DELETE request failed");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  }

  async function editTask(task) {
    if (JSON.parse(localStorage.getItem('localStorage'))) {
      let list = await JSON.parse(localStorage.getItem("list")) //get the list
      const taskToEdit = list.findIndex(atask => atask._id === task._id) //get the specific task index
      list[taskToEdit] = task
      localStorage.setItem("list", JSON.stringify(list)) //save the list
      
      console.log(`edited task #${task._id} successfully`, task);
      return;
    }
    try {
      const response = await fetch(`${url}/tasks/${task._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(`edited task #${task._id} successfully`, data);
      } else {
        console.error("PATCH request failed");
        return "there is an error";
      }
    } catch (error) {
      console.error("Network error", error);
      return "there is a network error";
    }
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
