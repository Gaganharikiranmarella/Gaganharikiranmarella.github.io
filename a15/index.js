let fruits = [
  { id: 1, name: "Apple", price: 250, status: "pending", quantity: 3 },
  { id: 2, name: "Orange", price: 100, status: "pending", quantity: 1 },
  { id: 3, name: "Mango", price: 80, status: "pending", quantity: 5 }
];

let newPrices = [260, 110, 90];

let updatedFruits = fruits
  .filter(f => f.quantity > 2)
  .map((f, i) => ({
    ...f,
    price: newPrices[i] ?? f.price,
    status: "complete",
    total: f.quantity * (newPrices[i] ?? f.price)
  }));

console.log(updatedFruits);
