function openProfile() {
  const slider = document.getElementById("slider");
  slider.classList.add("open");

  // Add event listener for touch to close the slider
  document.addEventListener("touchstart", closeProfile, { once: true });
}

function closeProfile() {
  const slider = document.getElementById("slider");
  slider.classList.remove("open");
}

let x = 0;
const slides = document.querySelectorAll(".slider-item_new");
const totalSlides = slides.length;

function showSlide(index) {
  const sliderWrapper = document.querySelector(".slider-wrapper_new");
  sliderWrapper.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  x = (x + 1) % totalSlides;
  showSlide(x);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

function homepage() {
  window.location.href = "index.html";
}
function ViewOrderPage() {
  window.location.href = "MobileOrderDetails.html";
}
function bestSeller() {
  window.location.href = "bestSellerProucts.html";
}

function cartPage() {
  window.location.href = "addToCartPage.html";
}
