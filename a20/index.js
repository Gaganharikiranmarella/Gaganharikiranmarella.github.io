const customers = [ 
  { cart: "1234567890", pin: "1234", name: "John", balance: 1000 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 800 }
];

let currentUser = null;

function login() {
  const card = document.getElementById("card").value.trim();
  const pin = document.getElementById("pin").value.trim();
  const msg = document.getElementById("login-msg");

  const found = customers.find(c => c.cart === card && c.pin === pin);
  if (found) {
    currentUser = found;
    showDashboard();
  } else {
    msg.textContent = "Invalid card or PIN";
  }
}

function showDashboard() {
  document.getElementById("atm").innerHTML = `
    <h2>Welcome, ${currentUser.name}</h2>
    <p style="text-align:center;">Balance: ₹${currentUser.balance}</p>
    <select id="action" onchange="handleAction()">
      <option value="">Select Action</option>
      <option value="deposit">Deposit</option>
      <option value="withdraw">Withdraw</option>
      <option value="transfer">Fund Transfer</option>
    </select>
    <div id="action-area"></div>
    <p id="action-msg"></p>
    <button onclick="logout()">Logout</button>
  `;
}

function logout() {
  currentUser = null;
  document.getElementById("atm").innerHTML = `
    <h1>Bank ATM</h1>
    <div id="login-box">
      <input type="text" id="card" placeholder="Card Number" />
      <input type="password" id="pin" placeholder="PIN" />
      <button onclick="login()">Login</button>
      <p id="login-msg"></p>
    </div>
  `;
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
  } else if (action === "transfer") {
    let options = customers
      .filter(c => c !== currentUser)
      .map(c => `<option value="${c.cart}">${c.name}</option>`)
      .join("");

    area.innerHTML = `
      <select id="recipient"><option value="">Select recipient</option>${options}</select>
      <input type="number" id="amount" placeholder="Enter amount" />
      <button onclick="transfer()">Transfer</button>
    `;
  } else {
    area.innerHTML = "";
  }
}

function deposit() {
  const amt = parseFloat(document.getElementById("amount").value);
  if (amt > 0) {
    currentUser.balance += amt;
    document.getElementById("action-msg").textContent = `Deposited ₹${amt}. New Balance: ₹${currentUser.balance}`;
    showDashboard();
  } else {
    document.getElementById("action-msg").textContent = "Enter a valid amount";
  }
}

function withdraw() {
  const amt = parseFloat(document.getElementById("amount").value);
  if (amt > 0 && currentUser.balance >= amt) {
    currentUser.balance -= amt;
    document.getElementById("action-msg").textContent = `Withdrew ₹${amt}. New Balance: ₹${currentUser.balance}`;
    showDashboard();
  } else {
    document.getElementById("action-msg").textContent = "Insufficient balance or invalid amount";
  }
}

function transfer() {
  const recipientCard = document.getElementById("recipient").value;
  const amt = parseFloat(document.getElementById("amount").value);
  const recipient = customers.find(c => c.cart === recipientCard);

  if (!recipient || recipient === currentUser) {
    document.getElementById("action-msg").textContent = "Select a valid recipient";
  } else if (amt > 0 && currentUser.balance >= amt) {
    currentUser.balance -= amt;
    recipient.balance += amt;
    document.getElementById("action-msg").textContent = `Transferred ₹${amt} to ${recipient.name}. Your Balance: ₹${currentUser.balance}`;
    showDashboard();
  } else {
    document.getElementById("action-msg").textContent = "Invalid amount or insufficient balance";
  }
}
