const fruits = [
  { name: "Apple", price: 250, img: "https://i.imgur.com/FKXzBKw.png" },
  { name: "Orange", price: 100, img: "https://i.imgur.com/vtFkbB3.png" },
  { name: "Mango", price: 80, img: "https://i.imgur.com/1f6bD6Z.png" },
  { name: "Banana", price: 50, img: "https://i.imgur.com/jNNT4LE.png" },
  { name: "Grapes", price: 120, img: "https://i.imgur.com/kV0NqTb.png" },
  { name: "Pineapple", price: 150, img: "https://i.imgur.com/IKbn6Q5.png" },
  { name: "Papaya", price: 90, img: "https://i.imgur.com/dP7dHjc.png" },
  { name: "Watermelon", price: 60, img: "https://i.imgur.com/j1oPffT.png" },
  { name: "Kiwi", price: 200, img: "https://i.imgur.com/W9gEDLe.png" },
  { name: "Strawberry", price: 180, img: "https://i.imgur.com/CK3DMBZ.png" }
];

// Arrow function to render all fruits
const renderFruits = () => {
  const container = document.getElementById('fruit-container');
  fruits.forEach(({ name, price, img }) => {
    const card = document.createElement('div');
    card.className = 'fruit-card';
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

renderFruits();
