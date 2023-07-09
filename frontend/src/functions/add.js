export default async function add(task) {
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