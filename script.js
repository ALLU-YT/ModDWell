let slideIndex = 0;
let slideInterval;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slideInterval = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function nextSlide() {
  clearTimeout(slideInterval); // Stop the automatic slideshow
  showSlides();
}

function prevSlide() {
  clearTimeout(slideInterval); // Stop the automatic slideshow
  slideIndex -= 2;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } // Loop back to last slide if needed
  showSlides();
}

$(document).ready(function () {
  // Swiper: Slider
  new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 0, // Adjust the space between slides
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});

// mobileview banner
let newSlideIndex = 0;

function showNewSlides() {
  let slides = document.getElementsByClassName("new-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  newSlideIndex++;
  if (newSlideIndex > slides.length) {
    newSlideIndex = 1;
  }
  slides[newSlideIndex - 1].style.display = "block";
  setTimeout(showNewSlides, 3000); // Change image every 3 seconds
}

function prevNewSlide() {
  newSlideIndex--;
  showNewSlides();
}

function nextNewSlide() {
  newSlideIndex++;
  showNewSlides();
}

showNewSlides();

$(document).ready(function () {
  $("#showButton").click(function () {
    $(".show_all").toggle(); // Toggle the visibility of the container
    $(this).hide();
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const paragraphs = document.querySelectorAll(".blog p");
//   let currentIndex = 0;

//   function showNextParagraph() {
//     paragraphs.forEach((p) => (p.style.display = "none"));
//     paragraphs[currentIndex].style.display = "block";
//     currentIndex = (currentIndex + 1) % paragraphs.length;
//   }

//   setInterval(showNextParagraph, 1500);
// });

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".x");
  const blogDiv = document.querySelector(".blog");

  closeButton.addEventListener("click", function () {
    blogDiv.style.display = "none";
  });
});

// Function to toggle the visibility of the list
function toggleList(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "none" || list.style.display === "") {
    // Check for both 'none' and '' (initial)
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

// function openNav() {
//   console.log("Opening sidenav");
//   document.getElementById("mySidenavv").style.width = "300px";
//   document.body.style.overflow = "hidden"; // Disable scrolling
// }

// function closeNav() {
//   console.log("Closing sidenav");
//   document.getElementById("mySidenavv").style.width = "0";
//   document.body.style.overflow = ""; // Enable scrolling
// }

// document.addEventListener('touchstart', function(event) {
//   closeNav();
// });

function openNav() {
  document.getElementById("mySidenavv").style.width = "300px";
}

function closeNavv() {
  document.getElementById("mySidenavv").style.width = "0";
}

// Add event listener to close sidenav on touch
// document.addEventListener('touchstart', function(event) {
//   closeNavv();
// });
// Add event listener for touch to close the slider
// document.addEventListener("touchstart", closeNavv, { once: true });

// function closeNavv() {
//   const slider = document.getElementById("mySidenavv");
//   slider.classList.remove("open");
// }

function openNavi() {
  document.getElementById("mySidenavi").style.width = "300px";
}
function closeNavi() {
  document.getElementById("mySidenavi").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the close button
  var closeButton = document.getElementById("closeButton");

  // Add click event listener to the close button
  closeButton.addEventListener("click", function () {
    // Get reference to the div to close
    var divToClose = document.querySelector(".close_the");

    // Hide both the div and the button
    divToClose.style.display = "none";
    closeButton.style.display = "none";
  });
});

// Get the modal
var modal = document.getElementById("myModal_1");

// Get the button that opens the modal
var btn = document.getElementById("addTicketBtn_1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal_1")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("modal-openmodal_1");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-openmodal_1");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-openmodal_1");
  }
};

function toggleListt_1(listId) {
  console.log("clicked");
  $("#" + listId).toggle();
}

function openNavv() {
  const slider = document.getElementById("mySidenavv");
  slider.style.width = "300px";
  slider.classList.add("open"); // Add class to show it's open
  document.addEventListener("click", closeNavvv, true); // Listen for clicks
}

function closeNavvv(event) {
  const slider = document.getElementById("mySidenavv");
  if (!slider.contains(event.target)) {
    slider.style.transition = "width 0.5s ease"; // Smooth transition effect
    slider.style.width = "0";
    setTimeout(() => {
      slider.classList.remove("open"); // Remove class after transition
    }, 500); // Delay should match transition duration
    document.removeEventListener("click", closeNavvv, true); // Remove listener to prevent multiple triggers
  }
}

// Function to close the slider when a close button is clicked
function closeSlider() {
  const slider = document.getElementById("mySidenavv");
  slider.style.transition = "width 0.5s ease"; // Smooth transition effect
  slider.style.width = "0";
  setTimeout(() => {
    slider.classList.remove("open"); // Remove class after transition
  }, 500); // Delay should match transition duration
  document.removeEventListener("click", closeNavvv, true); // Remove listener to prevent multiple triggers
}

// Example of adding a click event to a close button (assuming a button with id="closeButton")
document.getElementById("closeButton").addEventListener("click", closeSlider);

document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground_signup").style.display = "block";
  });
document
  .getElementById("signinPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground_signup").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "block";
  });

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addTicketBtn");

var span = document.getElementsByClassName("close")[0];
var span_2 = document.getElementsByClassName("close_signUp")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

// When the user clicks on <span> (x), close the modal
span_2.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};
function toggleBottomSheet() {
  var bottomSheet = document.getElementById("bottomSheet");
  var body = document.body;
  if (bottomSheet.style.transform === "translateY(0%)") {
    bottomSheet.style.transform = "translateY(100%)";
    body.style.overflow = "auto";
  } else {
    bottomSheet.style.transform = "translateY(0%)";
    body.style.overflow = "hidden";
  }
}

function goToSellerPage() {
  window.location.href = "bestSellerProucts.html";
}

function CartPage() {
  window.location.href = "addToCartPage.html";
}
function checkOut() {
  window.location.href = "checkOut.html";
}
function openOrderPage() {
  window.location.href = "MobilePurchaseHistory.html";
}

function openWishListPage() {
  window.location.href = "mobileWishListPage.html";
}
function wishllistPage() {
  window.location.href = "mobileWishListPage.html";
}

function wishListPage() {
  window.location.href = "mobileWishListPage.html";
}
function purchaseHistoryPages() {
  window.location.href = "purchaseHistorpage.html";
}
function manageProfileScreen() {
  window.location.href = "manageProfile.html";
}
function categoryPage() {
  window.location.href = "categorypage.html";
}

function change(item) {
  const buttons = document.querySelectorAll("ion-icon");
  buttons.forEach(function (obj) {
    obj.classList.remove("activee");
  });
  item.classList.add("activee");
}

function displysignUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "block";
  document.getElementsByClassName("mobilelogin")[0].style.display = "none";
}
function displyLoginUpForm() {
  // Assuming there's only one element with each class
  document.getElementsByClassName("mobileSignup")[0].style.display = "none";
  document.getElementsByClassName("mobilelogin")[0].style.display = "block";
}

function openNavSignup() {
  document.getElementById("mySidenavSignUp").style.width = "300px";
}

function closeNavSignup() {
  document.getElementById("mySidenavSignUp").style.width = "0";
}

//Cart Slider
function openCartSlider() {
  document.getElementById("mycartslider").style.width = "300px";
}
function closeNavSignupp() {
  document.getElementById("mycartslider").style.width = "0";
}
function manageProfile_edit() {
  window.location.href = "manageProfile.html";
}
