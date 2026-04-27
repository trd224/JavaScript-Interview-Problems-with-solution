// #f="ngForm" and #f on a form element in Angular refer to different things: one gives the Angular NgForm instance, the other gives the native HTML form element.

// 🔥 Core Difference
// Syntax	What we get
// #f="ngForm"	Angular NgForm object
// #f	Native HTMLFormElement (DOM)

// ✅ 1. #f="ngForm"
// <form #f="ngForm">
// </form>

// 👉 We get:

// f.value
// f.valid
// f.controls

// 👉 This is Angular form API

// ✅ 2. #f
// <form #f>
// </form>

// 👉 We get:

// Native DOM form element
// Can use:
// f.reset()
// f.submit()

// 👉 This is plain JavaScript form

// ⚠️ Important
// #f="ngForm" → used in template-driven forms
// #f → no Angular form tracking