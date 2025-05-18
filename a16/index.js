/*const products = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Mango", price: 60 },
  { id: 3, name: "Banana", price: 80 }
];

const cart = { 1: 7, 2: 9 };

products.map(product => {
  if (cart[product.id]) {
    const total = product.price * cart[product.id];
    console.log(product.id, product.name, product.price, total);
  }
});*/

const products = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Mango", price: 60 },
  { id: 3, name: "Banana", price: 80 }
];

const cart = { 1: 7, 2: 9 };

const totalOrder = products.reduce((sum, product) => {
  if (cart[product.id]) {
    const qty = cart[product.id];
    const total = product.price * qty;
    console.log(product.name, product.price, qty, total);
    return sum + total;
  }
  return sum;
}, 0);

console.log("Total Order Value:", totalOrder);

