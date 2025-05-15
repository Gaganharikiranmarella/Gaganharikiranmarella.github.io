function handleSearch() {
  const searchQuery = document.querySelector('.search-box input').value;
  alert("Searching for: " + searchQuery);
}

function toggleCart() {
  const cart = document.getElementById("cartItems");
  cart.style.display = (cart.style.display === "block") ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === i) slide.classList.add("active");
    });
  }

  function cycleSlides() {
    showSlide(index);
    index = (index + 1) % slides.length;
  }

  // Initial show
  cycleSlides();

  // Slide every 4 seconds
  setInterval(cycleSlides, 4000);
});

// Scroll brand section with arrow keys (optional)
document.addEventListener("keydown", (e) => {
  const carousel = document.querySelector(".brand-carousel");
  if (!carousel) return;

  if (e.key === "ArrowRight") carousel.scrollLeft += 100;
  if (e.key === "ArrowLeft") carousel.scrollLeft -= 100;
});

// Wishlist toggle (optional)
document.querySelectorAll(".wishlist-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "❤️" : "♡";
  });
});
