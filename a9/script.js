const fruits = ["apple", "banana", "mango", "grapes", "orange", "kiwi"];

const checkAvailability = () => {
  const input = document.getElementById("fruitInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  fruits.includes(input)
    ? result.textContent = `${input} is available!`
    : result.textContent = `${input} is not available!!`;
};

document.getElementById("checkBtn").addEventListener("click", checkAvailability);
