////Normal fatch
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => console.log(data))





///////Fetch with Timeout

function fetchWithTimeout(url, timeout = 3000) {
  const controller = new AbortController();
  
  setTimeout(() => controller.abort(), timeout);

  return fetch(url, { signal: controller.signal });
}


fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 3000) // for abort use less time
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log("Error:", err.message));
