export default async function remove(_id) {
  const url = process.env.REACT_APP_BACKEND_URL
  try {
    const response = await fetch(`${url}/tasks/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {  
      const data = await response.json()
      console.log("deleted task successfully", data)
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