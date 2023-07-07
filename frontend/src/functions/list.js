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
      console.log(await response.json());
    } else {
      console.error("POST request failed");
    }
  } catch (error) {
    console.error("Network error", error);
  }
}