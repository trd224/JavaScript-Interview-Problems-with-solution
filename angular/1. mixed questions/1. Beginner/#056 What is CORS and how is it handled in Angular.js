// 🔹 What is CORS in Angular?

// 👉 CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts requests from one domain to another domain.




// 🔹 Why It Happens
// When frontend and backend run on different domains/ports
// Browser blocks request for security reasons


// 🔹 Example
// Frontend → http://localhost:4200  
// Backend  → http://localhost:3000  

// 👉 Different origin → CORS issue ❌



// 🔹 How It Is Handled in Angular

// 👉 CORS is not handled in Angular, it must be configured on the backend server.


// 🔹 Backend Solution (Example - Node.js)
// const cors = require('cors');
// app.use(cors());



// 🔹 Angular Workaround (Development Only)
// Proxy Configuration
// {
//   "/api": {
//     "target": "http://localhost:3000",
//     "secure": false,
//     "changeOrigin": true
//   }
// }

// Run with:

// ng serve --proxy-config proxy.conf.json


// 🔹 Key Points
// CORS is a browser restriction
// Angular cannot fix it directly
// Must be handled on backend
// Proxy can help in development