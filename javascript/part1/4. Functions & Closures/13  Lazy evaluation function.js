// Simulated API call
function getUserData() {
  console.log("🌐 Fetching user data from server...");
  return { name: "Rizwan", age: 25 };
}

// Lazy wrapper
function createLazyUser() {
  let user = null;
  let isFetched = false;

  return function () {
    if (!isFetched) {
      user = getUserData(); // API called only once
      isFetched = true;
    }
    return user;
  };
}

// Main function
function renderDashboard(showProfile, showSettings) {
  console.log("\n--- Rendering Dashboard ---");

  const getUser = createLazyUser(); // created once

  if (showProfile) {
    console.log("Profile Name:", getUser().name);
  }

  if (showSettings) {
    console.log("User Age:", getUser().age);
  }

  console.log("--- Done ---");
}