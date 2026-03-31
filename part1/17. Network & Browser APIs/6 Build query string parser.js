function parseQueryString(query) {
  const result = {};

  if (!query) return result;

  // Remove leading "?" if present
  if (query.startsWith("?")) {
    query = query.slice(1);
  }

  // Split by "&"
  const pairs = query.split("&");

  pairs.forEach(pair => {
    const [key, value] = pair.split("=");      // split by "="
    result[decodeURIComponent(key)] = value !== undefined 
      ? decodeURIComponent(value) 
      : null;                                 // handle empty values
  });

  return result;
}



const queryString = "user=rizwan&age=35&city=Kota";
const parsed = parseQueryString(queryString);

console.log(parsed);