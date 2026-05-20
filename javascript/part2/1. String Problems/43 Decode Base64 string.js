let encoded = "SGVsbG8gV29ybGQ=";

let decoded = atob(encoded);

console.log(decoded); // "Hello World"


////////////////


function fromBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}

console.log(fromBase64("SGVsbG8g8J+Yig==")); // "Hello 😊"




///////////////

let encodedRes = "SGVsbG8gV29ybGQ=";

let decodedRes = Buffer.from(encodedRes, "base64").toString("utf-8");

console.log(decodedRes); // "Hello World"