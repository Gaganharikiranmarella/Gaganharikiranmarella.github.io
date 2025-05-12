function showCredentials() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("output").innerHTML = `
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `;
}
