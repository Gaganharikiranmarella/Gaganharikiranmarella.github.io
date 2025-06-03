const finalEndpoints = [
  "https://node-apps-gagan.vercel.app/name",
  "https://node-apps-gagan.vercel.app/greet",
  "https://node-apps-gagan.vercel.app/weather",
  "https://node-apps-gagan.vercel.app/products"
];

// Load output if on final.html (where #final-grid exists)
const grid = document.getElementById("final-grid");

if (grid) {
  finalEndpoints.forEach(async (url, index) => {
    const card = document.createElement("div");
    card.className = "final-card";
    card.innerHTML = `
      <h3>API ${index + 1}</h3>
      <p class="api-url">${url}</p>
      <pre>Loading....</pre>
    `;
    grid.appendChild(card);

    try {
  const res = await fetch(url);
  const type = res.headers.get("content-type") || "";
  let output;

  if (type.toLowerCase().includes("application/json")) {
    try {
      const jsonData = await res.json();
      output = JSON.stringify(jsonData, null, 2);
    } catch (jsonError) {
      // If parsing JSON fails, fallback to text
      output = await res.text();
    }
  } else {
    output = await res.text();
  }
      card.querySelector("pre").textContent = output;
    } catch (e) {
      card.querySelector("pre").textContent = `❌ Error: ${e.message}`;
    }
  });
}

// Handle "Final Output" button only if present (on index.html)
const finalBtn = document.getElementById("goFinalBtn");
if (finalBtn) {
  finalBtn.onclick = () => {
    window.location.href = "final.html";
  };
}
