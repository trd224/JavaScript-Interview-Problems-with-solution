async function fetchWithRetry(url, retries) {
  try {
    const res = await fetch(url);

    // 🔥 important check
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (retries === 0) {
      throw err; // throw from here, it will be handle next catch after then
    }

    console.log("Retrying...", retries);

    return fetchWithRetry(url, retries - 1);
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts", 3)
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err.message));