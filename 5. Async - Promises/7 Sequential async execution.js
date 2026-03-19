// 🔴 1. Sequential (Slow ❌)

async function getDashboard() {
  const user = await getUser();       // 1 sec
  const orders = await getOrders();   // 1 sec
  const payments = await getPayments(); // 1 sec

  return { user, orders, payments };
}


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