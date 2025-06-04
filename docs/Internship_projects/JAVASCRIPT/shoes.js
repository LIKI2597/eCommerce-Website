function addToCart(title, description,price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = {
      title,
      description,
      price,
      quantity: 1
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} added to cart.`);
  }


  function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    const productDesc = card.querySelector("p").textContent.toLowerCase();

    if (productName.includes(input) || productDesc.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};


scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};