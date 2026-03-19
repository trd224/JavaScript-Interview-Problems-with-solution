// 🔴 1. Sequential (Slow ❌)

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Data");
    }, 1000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Orders Data");
    }, 1000);
  });
}

function getPayments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payments Data");
    }, 1000);
  });
}

async function getDashboard() {
  const user = await getUser();        // waits 1s
  console.log(user);
  const orders = await getOrders();    // waits 1s
   console.log(orders);
  const payments = await getPayments(); // waits 1s
   console.log(payments);

  return { user, orders, payments };
}

// call function
getDashboard().then((data) => {
  console.log(data);
});



// ⏱️ What happens:

// Fetch user → wait 1 sec

// Then fetch orders → wait 1 sec

// Then fetch payments → wait 1 sec

// 👉 Total time = 3 seconds


/////⚠️ When You MUST Use Sequential

async function processOrder() {
  const user = await getUser();
  const order = await createOrder(user.id);
  const payment = await makePayment(order.id);

  return payment;
}