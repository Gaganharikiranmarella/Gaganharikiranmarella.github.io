document.getElementById("emailForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const email = document.getElementById("emailInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Loading...";

  try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
      const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
      const posts = await postsRes.json();

      resultDiv.innerHTML = `
        Name: ${user.name}<br>
        Number of Posts: ${posts.length}
      `;
    } else {
      resultDiv.textContent = "No user found with that email.";
    }
  } catch (err) {
    resultDiv.textContent = "Error fetching data.";
  }
});
