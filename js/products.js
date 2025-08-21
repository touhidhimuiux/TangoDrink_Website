document.addEventListener("DOMContentLoaded", () => {

  // Footer
  document.getElementById("site-footer").innerHTML = `
    <footer>
    <div class="footer-container">

      <!-- About -->
      <div class="footer-section footer-about">
        <h2>D-Refresh</h2>
        <p>সতেজতার সাথী আপনার প্রতিদিনের পানীয়। সুস্বাদু, সতেজ ও বিশ্বস্ত।</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="index.html">হোম</a></li>
          <li><a href="products.html">প্রোডাক্টস</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div class="footer-section footer-social">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>

        </div>
      </div>

    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>© 2025 D-Refresh. All Rights Reserved.</p>
    </div>
  </footer>
  `;

  // Products
  const products = [
    { name: "Tango Lemon", img: "images/tango_lemon.jpg", flavor: "Lemon", price: "৳30", link: "https://www.foodpanda.com.bd" },
    { name: "Tango Mango", img: "images/tango_mango.jpg", flavor: "Mango", price: "৳30", link: "https://www.tastytreatbd.com" },
    { name: "Tango Strawberry", img: "images/tango_strawberry.jpg", flavor: "Strawberry", price: "৳30", link: "https://www.othoba.com" },
  ];

  const productList = document.getElementById("product-list");

  // Insert product cards
  products.forEach(p => {
    productList.insertAdjacentHTML("beforeend", `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Flavor: ${p.flavor}</p>
        <p>Price: ${p.price}</p>
        <div class="card-buttons">
          <a href="cart.html?product=${encodeURIComponent(p.name)}" class="btn buy-btn">Buy Now</a>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn visit-btn">Visit Website</a>
        </div>
      </div>
    `);
  });

});
