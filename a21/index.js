document.getElementById("emailForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const email = document.getElementById("emailInput").value.trim();
  const resultDiv = document.getElementById("result");
  
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
      resultDiv.textContent = `Name: ${user.name}`;
    } else {
      resultDiv.textContent = "No user found with that email.";
    }
  } catch (err) {
    resultDiv.textContent = "Error fetching user data.";
  }
});
