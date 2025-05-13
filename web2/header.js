function handleSearch() {
  const searchQuery = document.querySelector('.search-box input').value;
  alert("Searching for: " + searchQuery);
}

function toggleCart() {
  const cart = document.getElementById("cartItems");
  cart.style.display = (cart.style.display === "block") ? "none" : "block";
}
