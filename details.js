// Product_Details_Banner_JS
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

// AddOnJs
// Get all the container elements
var containers = document.querySelectorAll(".AddOnContainerBox");

// Add click event listener to each container
containers.forEach(function (container) {
  container.addEventListener("click", function () {
    // Toggle 'selected' class for the clicked container
    container.classList.toggle("selected");
    // Check if the container is selected
    if (container.classList.contains("selected")) {
      // If selected, change border color to yellow
      container.style.borderColor = "yellow";
    } else {
      // If not selected, revert border color to original
      container.style.borderColor = "#18578c";
    }
  });
});

// Get all elements with the class 'SizeBox'
// Get all the container elements
var SizedBoxContainers = document.querySelectorAll(".SizeBox");

// Add click event listener to each container
SizedBoxContainers.forEach(function (container) {
  container.addEventListener("click", function () {
    // Deselect all containers
    SizedBoxContainers.forEach(function (c) {
      c.classList.remove("selected");
      c.style.borderColor = "#18578c";
    });

    // Select the clicked container
    container.classList.add("selected");
    container.style.borderColor = "yellow";
  });
});
