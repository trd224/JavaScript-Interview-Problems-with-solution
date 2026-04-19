// 👉 One-Line Interview Answer:
// Content Security Policy (CSP) in Angular is a security mechanism that restricts unsafe content (like inline scripts/styles) to prevent XSS (Cross-Site Scripting) attacks, and Angular apps must be configured to comply with these rules.


// 🔥 What is CSP?

// 👉 In simple words:
// CSP = browser security rule that controls what code can run in your app

// 👉 It prevents:

// XSS (Cross-Site Scripting) attacks
// Unauthorized scripts/styles



// 🔹 Why CSP is important in Angular?

// Even though Angular is secure by default:

// ✔ It still runs in browser
// ✔ External scripts/styles can be risky

// 👉 So CSP adds extra protection layer




// 🔹 Common CSP Rules

// Content-Security-Policy:
//   default-src 'self';
//   script-src 'self';
//   style-src 'self';

// 👉 Means:

// Only allow resources from same origin




// 🔥 CSP Issues in Angular
// 1️⃣ Inline Scripts ❌
// <script>alert('Hi')</script>

// 👉 Blocked by CSP



// CSP is not configured in an Angular file; it is set in the server (like Nginx, Apache, or Node) using HTTP headers.

// 🔥 Where do we configure CSP?

// 👉 Not inside Angular files ❌
// 👉 It is configured on server side ✔



// 🔹 Common Places to Configure CSP
// 1️⃣ Nginx
// add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self';";

// 2️⃣ Node.js (Express)
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'self'; script-src 'self'; style-src 'self';"
//   );
//   next();
// });

// 3️⃣ Apache
// Header set Content-Security-Policy "default-src 'self'; script-src 'self';"

// 4️⃣ index.html (NOT recommended ❌)
// <meta http-equiv="Content-Security-Policy" content="default-src 'self';">

// 👉 Works, but:

// Less secure
// Should use server headers instead