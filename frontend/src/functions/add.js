export default function add(task) {
  const url = process.env.REACT_APP_BACKEND_URL
  if (task === "") return;
  console.log(task);

  async function addTask(task) {
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
      });

      if (response.ok) {  
        // Handle successful response
        console.log("POST request successful", await response.json());
      } else {
        // Handle error response
        console.error("POST request failed");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  };

  addTask(task);
}