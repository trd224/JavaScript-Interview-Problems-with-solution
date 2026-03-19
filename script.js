//🟢 2. Parallel (Fast ✅)
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
    }, 3000);
  });
}

async function getDashboard() {
  const userPromise = getUser();
  const ordersPromise = getOrders();
  const paymentsPromise = getPayments();

  const user = await userPromise;
  const orders = await ordersPromise;
  const payments = await paymentsPromise;

  return { user, orders, payments };
}

getDashboard().then(res => console.log(res))

