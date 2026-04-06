// 🧠 Easy Way to Remember
// Function	      Meaning	            Use
// btoa	          Binary → ASCII	    Encode
// atob	          ASCII → Binary	    Decode

///////////////✅ 1. In Browser (simple)

let original = "Hello World";

// Encode
let base64 = btoa(original);

// Decode
let back = atob(base64);

console.log(base64); // SGVsbG8gV29ybGQ=
console.log(back);   // Hello World



////////////⚠️ Problem with Unicode (important)

//btoa() only works with ASCII, not Unicode (like Hindi, emojis ❌)

//✅ Fix for Unicode

function toBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

console.log(toBase64("Hello 😊"));



//////////////////////////////////////


// ✅ 2. In Node.js

let strng = "Hello World";

let encodedRes = Buffer.from(strng).toString("base64");

console.log(encodedRes); // "SGVsbG8gV29ybGQ="


///🔄 Decode Base64 (bonus)

let decoded = atob(encodedRes);  //atob → ASCII to Binary