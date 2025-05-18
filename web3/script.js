const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const notify = (message) => {
  const note = document.getElementById("notify");
  note.textContent = message;
  note.style.display = "block";
  setTimeout(() => {
    note.style.display = "none";
  }, 3000);
};

const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Product List</h2>";

  products.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";

    box.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    root.appendChild(box);
  });
};

const addToCart = (id) => {
  cart[id] = (cart[id] || 0) + 1;
  notify("Item added. Check cart.");
};

const removeFromCart = (id) => {
  if (cart[id]) {
    cart[id]--;
    if (cart[id] === 0) delete cart[id];
    dispCart();
  }
};

const dispCart = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Your Cart</h2>";

  if (Object.keys(cart).length === 0) {
    root.innerHTML += "<p>Your cart is empty.</p>";
    return;
  }

  const container = document.createElement("div");
  container.className = "cart-container";
  let total = 0;

  for (let id in cart) {
    const product = products.find(p => p.id == id);
    const quantity = cart[id];
    const itemTotal = product.price * quantity;
    total += itemTotal;

    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <h4>${product.name}</h4>
      <span>Qty: ${quantity} | ₹${itemTotal}</span>
      <div class="quantity-control">
        <button onclick="addToCart(${id})">+</button>
        <button onclick="removeFromCart(${id})">-</button>
      </div>
    `;
    container.appendChild(item);
  }

  const totalDisplay = document.createElement("div");
  totalDisplay.className = "total-price";
  totalDisplay.textContent = `Total Order Value: ₹${total}`;

  root.appendChild(container);
  root.appendChild(totalDisplay);
};

window.onload = showProducts;
document.getElementById("homeBtn").onclick = showProducts;
document.getElementById("cartBtn").onclick = dispCart;
