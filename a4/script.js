const populateDays = () => {
  const daySelect = document.getElementById("daySelect");
  daySelect.innerHTML = `<option value="" disabled selected>Day</option>`;
  for (let i = 1; i <= 31; i++) {
    const opt = document.createElement("option");
    opt.text = i;
    opt.value = i;
    daySelect.appendChild(opt);
  }
};

const populateMonths = () => {
  const monthSelect = document.getElementById("monthSelect");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  monthSelect.innerHTML = `<option value="" disabled selected>Month</option>`;
  months.forEach((month, index) => {
    const opt = document.createElement("option");
    opt.text = month;
    opt.value = index + 1;
    monthSelect.appendChild(opt);
  });
};

const populateYears = () => {
  const yearSelect = document.getElementById("yearSelect");
  const currentYear = new Date().getFullYear();
  yearSelect.innerHTML = `<option value="" disabled selected>Year</option>`;
  for (let y = currentYear; y >= 1900; y--) {
    const opt = document.createElement("option");
    opt.text = y;
    opt.value = y;
    yearSelect.appendChild(opt);
  }
};

const createPronounSelector = () => {
  const box = document.getElementById("customPronounBox");
  box.innerHTML = `
    <select id="pronounSelect">
      <option value="" disabled selected>Select your pronoun</option>
      <option value="She/Her">She/Her</option>
      <option value="He/Him">He/Him</option>
      <option value="They/Them">They/Them</option>
      <option value="Other">Other</option>
    </select>
    <button type="button" id="okButton">OK</button>
    <p id="pronounDisplay"></p>
  `;

  document.getElementById("okButton").addEventListener("click", () => {
    const selected = document.getElementById("pronounSelect").value;
    const display = document.getElementById("pronounDisplay");
    display.textContent = selected ? `Selected pronoun: ${selected}` : "";
  });
};

const handleGenderChange = () => {
  const radios = document.getElementsByName("gender");
  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "Custom" && radio.checked) {
        createPronounSelector();
      } else {
        document.getElementById("customPronounBox").innerHTML = "";
      }
    });
  });
};

window.onload = () => {
  populateDays();
  populateMonths();
  populateYears();
  handleGenderChange();
};
