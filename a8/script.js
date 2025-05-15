const display = document.getElementById("display");

// Core functions using arrow syntax
const appendValue = (val) => display.value += val;
const clearDisplay = () => display.value = "";
const deleteLast = () => display.value = display.value.slice(0, -1);
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
};

// Central button handler
const handleButtonClick = (e) => {
  const value = e.target.getAttribute("data-value");
  const action = e.target.getAttribute("data-action");

  if (value !== null) appendValue(value);
  else if (action === "clear") clearDisplay();
  else if (action === "delete") deleteLast();
  else if (action === "calculate") calculate();
};

// Event delegation
document.querySelector(".buttons").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") handleButtonClick(e);
});
