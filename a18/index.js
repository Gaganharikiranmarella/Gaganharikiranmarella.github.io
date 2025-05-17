
const sum = (a, b) => {
  return new Promise((resolve) => {
    resolve(a + b);
  });
};

const sqr = (x) => x * x;

const main = async () => {
  const result = await sum(4, 5);
  const square = sqr(result);
  console.log("Sum:", result);
  console.log("Square:", square);
};

main();
