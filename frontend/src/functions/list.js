export default async function list() {  
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
      console.log(data)
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