
  function showSection(type) {
    const greenSection = document.getElementById('greenSection');
    const cookedSection = document.getElementById('cookedSection');
    const greenBtn = document.getElementById('greenBtn');
    const cookedBtn = document.getElementById('cookedBtn');

    if (type === 'green') {
      greenSection.style.display = 'block';
      cookedSection.style.display = 'none';
      greenBtn.classList.add('active');
      cookedBtn.classList.remove('active');
    } else {
      greenSection.style.display = 'none';
      cookedSection.style.display = 'block';
      greenBtn.classList.remove('active');
      cookedBtn.classList.add('active');
    }
  }

  // Optional: filter food items on search
  document.getElementById('searchBar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.food-item').forEach(item => {
      const name = item.textContent.toLowerCase();
      item.style.display = name.includes(query) ? 'block' : 'none';
    });
  });


  