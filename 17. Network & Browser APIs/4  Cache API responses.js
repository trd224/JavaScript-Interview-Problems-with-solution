function createFetcher() {
  const cache = {}; // ✅ inside but remembered

  return async function fetchWithCache(url) {
    if (cache[url]) {
      console.log("From cache");
      return cache[url];
    }

    console.log("Fetching from API");
    const res = await fetch(url);
    const data = await res.json();

    cache[url] = data;
    return data;
  };
}

const fetchWithCache = createFetcher();

async function run(){
  await fetchWithCache("https://jsonplaceholder.typicode.com/posts"); // API
  await fetchWithCache("https://jsonplaceholder.typicode.com/posts"); // cache ✅
}

run();
