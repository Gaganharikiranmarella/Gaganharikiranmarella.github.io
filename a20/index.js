const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

const login = () => {
  const card = document.getElementById("card").value;
  const pin = document.getElementById("pin").value;
  const msg = document.getElementById("msg");
  const box = document.getElementById("login-box");

  const customer = customers.find(c => c.cart === card && c.pin === pin);

  if (customer) {
    box.innerHTML = `<h2>Welcome, ${customer.name}!</h2>`;
  } else {
    msg.textContent = "Invalid card number or PIN!";
  }
};
