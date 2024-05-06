let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function nextSlide() {
  clearTimeout(showSlides); // Stop the automatic slideshow
  showSlides();
}

function prevSlide() {
  clearTimeout(showSlides); // Stop the automatic slideshow
  slideIndex -= 2;
  if (slideIndex < 0) {slideIndex = slides.length - 1;} // Loop back to last slide if needed
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
      if (newSlideIndex > slides.length) {newSlideIndex = 1}    
      slides[newSlideIndex-1].style.display = "block";  
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


      
      document.addEventListener("DOMContentLoaded", function() {
        const closeButton = document.querySelector('.x');
        const blogDiv = document.querySelector('.blog');
    
        closeButton.addEventListener('click', function() {
          blogDiv.style.display = 'none';
        });
      });

      document.addEventListener("DOMContentLoaded", function() {
        const paragraphs = document.querySelectorAll('.blog p');
        let currentIndex = 0;
    
        function showNextParagraph() {
          paragraphs.forEach(p => p.style.display = 'none');
          paragraphs[currentIndex].style.display = 'block';
          currentIndex = (currentIndex + 1) % paragraphs.length;
        }
    
        setInterval(showNextParagraph, 1500);
      });


      // nav 
      // $(document).ready(function(){
      //   $('.nav-link').click(function(){
      //     $('.navbar-collapse').collapse('hide');
      //     $('.nav-item').removeClass('active');
      //     $(this).parent().addClass('active');
      //   });
      // });



// JavaScript function to toggle visibility of input field
function toggleInputVisibility() {
  var inputField = document.querySelector('.nav_input_box');
  if (inputField.style.display === 'none' || inputField.style.display === '') {
      inputField.style.display = 'block';
  } else {
      inputField.style.display = 'none';
  }
}

// Add click event listener to the search icon
document.querySelector('#btn_0').addEventListener('click', toggleInputVisibility);

  function change(item){
        const buttons = document.querySelectorAll('ion-icon');
        buttons.forEach(function(obj){
            obj.classList.remove("active");
        });
        item.classList.add("active");
    }


    

  


    const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


const slider = document.querySelector('.category_row');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

slider.addEventListener('mousedown', touchStart);
slider.addEventListener('touchstart', touchStart);
slider.addEventListener('mouseup', touchEnd);
slider.addEventListener('mouseleave', touchEnd);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('mousemove', touchMove);
slider.addEventListener('touchmove', touchMove);

function touchStart(e) {
  if (e.type === 'touchstart') {
    startPos = e.touches[0].clientX;
  } else {
    startPos = e.clientX;
  }
  isDragging = true;
}

function touchMove(e) {
  if (isDragging) {
    const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    setSliderPosition();
  }
}

function touchEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;
}

function moveSlide(direction) {
  const sliderWidth = slider.offsetWidth;
  const containerWidth = slider.parentElement.offsetWidth;
  const maxScroll = sliderWidth - containerWidth;
  if (direction === -1) {
    currentTranslate += containerWidth / 2;
  } else {
    currentTranslate -= containerWidth / 2;
  }
  currentTranslate = Math.max(-maxScroll, Math.min(0, currentTranslate));
  setSliderPosition();
  prevTranslate = currentTranslate;
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}


// slider
