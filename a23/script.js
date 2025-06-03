// Replace these with your real Vercel-hosted endpoint URLs
const vercelEndpoints = [
  "https://node-apps-gagan.vercel.app/name",
  "https://node-apps-gagan.vercel.app/greet",
  "https://node-apps-gagan.vercel.app/weather",
  "https://node-apps-gagan.vercel.app/products"
];

document.querySelectorAll('.fetchBtn').forEach((btn, index) => {
  btn.addEventListener('click', async () => {
    const section = btn.closest('.vercel-section');
    const urlLabel = section.querySelector('.url-label');
    const outputBox = section.querySelector('.api-output');

    const endpoint = vercelEndpoints[index];
    urlLabel.textContent = `URL: ${endpoint}`;

    try {
      const res = await fetch(endpoint);
      const contentType = res.headers.get("content-type");
      let data;

      if (contentType.includes("application/json")) {
        data = await res.json();
        outputBox.textContent = JSON.stringify(data, null, 2);
      } else {
        data = await res.text();
        outputBox.textContent = data;
      }

    } catch (error) {
      outputBox.textContent = `Error fetching data: ${error.message}`;
    }

    outputBox.style.display = "block";
  });
});
