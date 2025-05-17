const products = [
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
});
