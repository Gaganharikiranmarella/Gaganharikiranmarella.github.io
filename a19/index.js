function add(...values) {
  const sum = values.reduce((acc, val) => acc + val, 0);
  console.log(sum);
}

add(5, 6, 7, 8, 9, 5);
