// Original array of fruit items
let fruits = [
  { id: 1, name: "Apple", price: 250, status: "pending" },
  { id: 2, name: "Orange", price: 100, status: "pending" },
  { id: 3, name: "Mango", price: 80, status: "pending" }
];

// Function to update price, status, and add total using spread operator
const updateFruits = (items, updatedPrices) => {
  return items.map((item, index) => {
    const newPrice = updatedPrices[index] ?? item.price;
    return {
      ...item,
      price: newPrice,
      status: "complete",
      total: newPrice // assuming total = price here
    };
  });
};

// Example usage:
const newPrices = [260, 110, 90];
const updatedFruits = updateFruits(fruits, newPrices);

console.log(updatedFruits);
