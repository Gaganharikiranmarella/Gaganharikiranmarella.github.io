
const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    const x = a + b;
    x < 5 ? reject("x should not be less than 5") : resolve(x);
  });
};

const sqr = (x) => x * x;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const inputs = [
    [2, 1], 
    [7, 9]  
  ];

  for (let [a, b] of inputs) {
    try {
      const result = await sum(a, b);
      const square = sqr(result);
      console.log(`Sum: ${result}`);
      console.log(`Square: ${square}`);
    } catch (error) {
      console.log(error);
    }
    await delay(1500);
  }
};

main();
