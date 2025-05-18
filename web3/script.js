const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Clear any existing content

  const container = document.createElement("div");
  container.className = "product-container";

  products.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";

    box.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(box);
  });

  root.appendChild(container);
};

const addToCart = (productId) => {
  alert(`Product ${productId} added to cart!`);
};
