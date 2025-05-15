let fruits = [
  { id: 1, name: "Apple", price: 250, img: "https://i.imgur.com/FKXzBKw.png" },
  { id: 2, name: "Orange", price: 100, img: "https://i.imgur.com/vtFkbB3.png" },
  { id: 3, name: "Mango", price: 80, img: "https://i.imgur.com/1f6bD6Z.png" }
];

// Arrow function to render fruits
const renderFruits = () => {
  const container = document.getElementById("fruit-container");
  container.innerHTML = "";

  fruits.forEach(({ name, price, img }) => {
    const card = document.createElement("div");
    card.className = "fruit-card";
    card.innerHTML = `
      <img src="${img}" alt="${name}">
      <h3>${name}</h3>
      <p>₹${price}</p>
      <button class="add-btn">Add to Cart</button>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
      console.log(`${name} added to cart.`);
    });

    container.appendChild(card);
  });
};

// Arrow function to add fruit
const addFruit = () => {
  const id = document.getElementById("fruit-id").value.trim();
  const name = document.getElementById("fruit-name").value.trim();
  const price = parseInt(document.getElementById("fruit-price").value.trim());
  const img = document.getElementById("fruit-image").value.trim();

  if (id && name && !isNaN(price) && img) {
    fruits.push({ id, name, price, img });
    renderFruits();

    // Clear inputs
    document.getElementById("fruit-id").value = "";
    document.getElementById("fruit-name").value = "";
    document.getElementById("fruit-price").value = "";
    document.getElementById("fruit-image").value = "";
  } else {
    alert("Please enter all valid fruit details!");
  }
};

document.getElementById("add-fruit-btn").addEventListener("click", addFruit);

// Initial render
renderFruits();
