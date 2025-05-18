
function toggleCart() {
  const cart = document.querySelector(".cart-dropdown");
  cart.classList.toggle("active");
}

function handleSearch() {
  const input = document.querySelector(".search-box input");
  alert(`You searched for: ${input.value}`);
}

const toggleButtons = [];
toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

const forms = document.querySelectorAll("form");
forms.forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = Array.from(form.querySelectorAll("input, textarea"));
    const values = {};
    inputs.forEach(input => {
      values[input.name || input.placeholder] = input.value;
    });

    alert("Form submitted: " + JSON.stringify(values, null, 2));
    form.reset();
  });
});
