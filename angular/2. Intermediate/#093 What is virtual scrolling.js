// Virtual scrolling is a technique in Angular that renders only the visible items in a list and reuses DOM elements while scrolling, instead of rendering the entire list at once.

// 🔹 What it means (simple)
// Normally: full list loads in DOM ❌ (slow for big data)
// Virtual scrolling: only visible items load ✅ (fast)


// 🔹 Why we use it
// Improves performance 🚀
// Reduces DOM size
// Handles large lists efficiently (10,000+ items)


// 🔹 Example using Angular CDK

// <cdk-virtual-scroll-viewport itemSize="50" style="height: 200px;">
//   <div *cdkVirtualFor="let item of items">
//     {{ item }}
//   </div>
// </cdk-virtual-scroll-viewport>





// 🔹 How it actually works in Angular

// Virtual scrolling (via CDK) uses Angular CDK viewport system:

// 1. Fake scroll space is created
// It creates a big scroll container
// Even if items are not rendered, scroll height is calculated

// 2. Only a small window is rendered
// Example: show only 10 items at a time
// These 10 items are visible DOM elements

// 3. On scroll event

// When you scroll:

// Angular detects scroll position
// It calculates:
// which items should be visible now

// 4. DOM is reused (VERY IMPORTANT)

// Instead of creating new elements every time:

// Old DOM items are reused
// Data inside them is replaced

// 👉 So it feels like new items are loading, but actually:

// same DOM elements are just updated




// 🔹 Simple example

// Imagine list: 1 to 1000

// At start:

// [1 2 3 4 5]

// Scroll down:

// [6 7 8 9 10]

// 👉 But DOM elements are same — only values changed

// 🔹 Key idea

// 👉 Virtual scrolling does NOT render everything
// 👉 It moves a small set of DOM elements and updates data