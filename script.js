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
