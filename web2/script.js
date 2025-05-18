// Dark Mode Toggle using array
const toggleButtons = [document.getElementById("darkModeToggle")];
toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

// Contact Form Submission using array
const form = document.getElementById("contactForm");
const fields = ["name", "email", "message"];
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {};
  fields.forEach(id => {
    formData[id] = document.getElementById(id).value.trim();
  });

  alert(`Thank you, ${formData.name}! Your message has been sent.`);
  form.reset();
});
