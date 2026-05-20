// Convert:

// const url = "https://example.com:8080/path/name?user=rizwan&age=25#section";

// 👉 Into:

// {
//   protocol: "https",
//   host: "example.com",
//   port: "8080",
//   path: "/path/name",
//   query: { user: "rizwan", age: "25" },
//   hash: "section"
// }

function parseURL(url) {
  const result = {
    protocol: null,
    host: null,
    port: null,
    path: null,
    query: {},
    hash: null,
  };

  // 1️⃣ Extract protocol
  const protocolSplit = url.split("://");
  result.protocol = protocolSplit[0];
  let rest = protocolSplit[1];

  // 2️⃣ Extract hash (#)
  const hashSplit = rest.split("#");
  rest = hashSplit[0];
  if (hashSplit[1]) {
    result.hash = hashSplit[1];
  }

  // 3️⃣ Extract query (?)
  const querySplit = rest.split("?");
  rest = querySplit[0];

  if (querySplit[1]) {
    const queryParams = querySplit[1].split("&");
    queryParams.forEach(param => {
      const [key, value] = param.split("=");
      result.query[key] = value;
    });
  }

  // 4️⃣ Extract host + port + path
  const firstSlashIndex = rest.indexOf("/");

  let hostPart;
  if (firstSlashIndex !== -1) {
    hostPart = rest.substring(0, firstSlashIndex);
    result.path = rest.substring(firstSlashIndex);
  } else {
    hostPart = rest;
    result.path = "/";
  }

  // 5️⃣ Extract port
  const hostSplit = hostPart.split(":");
  result.host = hostSplit[0];
  if (hostSplit[1]) {
    result.port = hostSplit[1];
  }

  return result;
}



const url = "https://example.com:8080/path/name?user=rizwan&age=25#section";

console.log(parseURL(url));