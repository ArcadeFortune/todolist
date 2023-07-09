export default async function remove(id) {
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