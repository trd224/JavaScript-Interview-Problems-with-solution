// 🧗 Imagine This

// You want to climb 3 steps.

// You can take:

// 1 step
// 2 steps
// 🎯 Let’s LIST all ways (no logic, just brute force)

// For n = 3:

// 1 + 1 + 1
// 1 + 2
// 2 + 1

// 👉 Total = 3 ways

// 🧠 Now focus on ONE thing

// Look at each path’s LAST STEP

// Path	             Last Step	         Came From
// 1+1+1	         1	                 step 2
// 1+2	             2	                 step 1
// 2+1	             1	                 step 2
// 🔥 Important Observation

// 👉 Paths ending with 1 step come from step 2
// 👉 Paths ending with 2 steps come from step 1

// ✅ So total ways:
// Ways from step 2 → 2 ways
// Ways from step 1 → 1 way
// Total = 2 + 1 = 3
// 💥 THIS is the whole idea

// We are just doing:

// 👉 All ways coming from (n-1)
// 👉 + All ways coming from (n-2)

// 📌 Now formula makes sense

// 𝑓(𝑛)=𝑓(𝑛−1)+𝑓(𝑛−2)


function climbStairs(n) {
    if (n <= 2) return n;
    return climbStairs(n - 1) + climbStairs(n - 2);
}

// Example
console.log(climbStairs(3)); // 3