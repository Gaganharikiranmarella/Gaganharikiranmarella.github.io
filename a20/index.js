const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

let currentUser = null;

function login() {
  const card = document.getElementById("card").value;
  const pin = document.getElementById("pin").value;
  const msg = document.getElementById("login-msg");

  const found = customers.find(c => c.cart === card && c.pin === pin);
  if (found) {
    currentUser = found;
    document.getElementById("atm").innerHTML = `
      <h2>Welcome, ${found.name}</h2>
      <select id="action" onchange="handleAction()">
        <option value="">Select Action</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      <div id="action-area"></div>
      <p id="action-msg"></p>
    `;
  } else {
    msg.textContent = "Invalid card or PIN";
  }
}

function handleAction() {
  const action = document.getElementById("action").value;
  const area = document.getElementById("action-area");
  const msg = document.getElementById("action-msg");
  msg.textContent = "";

  if (action === "deposit") {
    area.innerHTML = `
      <input type="number" id="amount" placeholder="Enter amount" />
      <button onclick="deposit()">OK</button>
    `;
  } else if (action === "withdraw") {
    area.innerHTML = `
      <input type="number" id="amount" placeholder="Enter amount" />
      <button onclick="withdraw()">OK</button>
    `;
  } else {
    area.innerHTML = "";
  }
}

function deposit() {
  const amt = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amt) && amt > 0) {
    currentUser.balance += amt;
    document.getElementById("action-msg").textContent = `Deposited ₹${amt}. Balance: ₹${currentUser.balance}`;
  } else {
    document.getElementById("action-msg").textContent = "Enter a valid amount";
  }
}

function withdraw() {
  const amt = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amt) && amt > 0) {
    if (currentUser.balance >= amt) {
      currentUser.balance -= amt;
      document.getElementById("action-msg").textContent = `Withdrew ₹${amt}. Balance: ₹${currentUser.balance}`;
    } else {
      document.getElementById("action-msg").textContent = "Insufficient balance";
    }
  } else {
    document.getElementById("action-msg").textContent = "Enter a valid amount";
  }
}
