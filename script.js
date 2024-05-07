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

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
