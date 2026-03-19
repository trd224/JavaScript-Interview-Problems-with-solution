
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Data");
    }, 3000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Orders Data");
    }, 3000);
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
