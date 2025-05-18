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
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to cart</button>
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
  root.innerHTML = "<h2>Cart</h2>";

  if (Object.keys(cart).length === 0) {
    root.innerHTML += "<p>Your cart is empty.</p>";
    return;
  }

  const cartList = document.createElement("ul");
  for (const id in cart) {
    const product = products.find(p => p.id == id);
    const li = document.createElement("li");
    li.textContent = `${product.name} - Quantity: ${cart[id]}`;
    cartList.appendChild(li);
  }

  root.appendChild(cartList);
};

// Run showProducts initially
window.onload = showProducts;
