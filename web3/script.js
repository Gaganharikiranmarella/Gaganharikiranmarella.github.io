const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Product List</h2>";

  products.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";

    box.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to cart</button>
    `;

    root.appendChild(box);
  });
};

const addToCart = (id) => {
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  alert(`Added product ${id} to cart. Quantity: ${cart[id]}`);
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
    const prod = products.find(p => p.id == id);
    const quantity = cart[id];
    const itemTotal = prod.price * quantity;
    total += itemTotal;

    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <h4>${prod.name}</h4>
      <p>Qty: ${quantity} | ₹${itemTotal}</p>
    `;
    container.appendChild(item);
  }

  const totalDisplay = document.createElement("div");
  totalDisplay.className = "total-price";
  totalDisplay.textContent = `Total Order Value: ₹${total}`;

  root.appendChild(container);
  root.appendChild(totalDisplay);
};

// Run showProducts initially
window.onload = showProducts;

// Add event listeners to Home and Cart buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("homeBtn").onclick = showProducts;
  document.getElementById("cartBtn").onclick = dispCart;
});
