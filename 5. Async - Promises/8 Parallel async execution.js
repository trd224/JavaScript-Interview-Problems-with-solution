//🟢 2. Parallel (Fast ✅)

async function getDashboard() {
  const userPromise = getUser();
  const ordersPromise = getOrders();
  const paymentsPromise = getPayments();

  const user = await userPromise;
  const orders = await ordersPromise;
  const payments = await paymentsPromise;

  return { user, orders, payments };
}


// ⏱️ What happens:

// Start all API calls together

// All run in background

// After 1 sec → all data ready

// 👉 Total time = 1 second





////⚡ Best Practice (Used in Real Projects)

async function getDashboard() {
  const [user, orders, payments] = await Promise.all([
    getUser(),
    getOrders(),
    getPayments()
  ]);

  return { user, orders, payments };
}


// 👉 Use Parallel when:

// Tasks are independent ✅