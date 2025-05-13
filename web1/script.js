function showSection(section) {
  const greenSection = document.getElementById('greenSection');
  const cookedSection = document.getElementById('cookedSection');
  const greenBtn = document.getElementById('greenBtn');
  const cookedBtn = document.getElementById('cookedBtn');

  if (section === 'green') {
    greenSection.style.display = 'block';
    cookedSection.style.display = 'none';
    greenBtn.classList.add('active');
    cookedBtn.classList.remove('active');
  } else {
    greenSection.style.display = 'none';
    cookedSection.style.display = 'block';
    cookedBtn.classList.add('active');
    greenBtn.classList.remove('active');
  }
}
