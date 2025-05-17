function greet() {
  console.log("Hello World");
}

async function dispData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  greet(); // Now runs after data is logged
}

dispData();
