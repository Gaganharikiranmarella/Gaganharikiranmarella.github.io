    document.getElementById("header").innerHTML = `
  <div class="header container">
    <h1>FoodMart</h1>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Categories</a>
      <a href="#">Contact</a>
    </nav>
  </div>
`;

document.getElementById("hero").innerHTML = `
  <div class="hero container">
    <h2>100% Natural Smoothies & Juices</h2>
  </div>
`;

document.getElementById("offers").innerHTML = `
  <div class="offers container">
    <div class="offer-card">
      <h3>20% Off</h3>
      <p>Fruits & Vegetables</p>
    </div>
    <div class="offer-card">
      <h3>15% Off</h3>
      <p>Baked Products</p>
    </div>
  </div>
`;

document.getElementById("categories").innerHTML = `
  <div class="container">
    <h3 class="section-title">Categories</h3>
    <div class="categories">
      <div class="category-card">Fruits</div>
      <div class="category-card">Vegetables</div>
      <div class="category-card">Bakery</div>
      <div class="category-card">Dairy</div>
      <div class="category-card">Juices</div>
    </div>
  </div>
`;

document.getElementById("brands").innerHTML = `
  <div class="container">
    <h3 class="section-title">New Brands</h3>
    <div class="brands">
      <div class="brand-card">Amber Jar - Honey</div>
      <div class="brand-card">Golden Farms - Butter</div>
      <div class="brand-card">Fruit Bliss - Juices</div>
    </div>
  </div>
`;

document.getElementById("products").innerHTML = `
  <div class="container">
    <h3 class="section-title">Trending Products</h3>
    <div class="products">
      ${["🍌", "🥒", "🥛", "🍞"].map(icon => `
        <div class="product-card">
          <div style="font-size: 3rem;">${icon}</div>
          <p>Sunstar Fresh</p>
          <strong>$18.00</strong>
        </div>
      `).join('')}
    </div>
  </div>
`;

document.getElementById("footer").innerHTML = `
  <div class="footer">
    <p>&copy; 2025 FoodMart. All rights reserved.</p>
  </div>
`;
