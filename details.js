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

// AddOn Checked Wrapper
// JavaScript to toggle checkbox when the div is clicked
document
  .getElementById("check_ed_wrapper")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("check_ed");
    checkbox.checked = !checkbox.checked;
  });

document
  .getElementById("check_ed_wrapper_1")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("check_ed_1");
    checkbox.checked = !checkbox.checked;
  });

document
  .getElementById("check_ed_wrapper_2")
  .addEventListener("click", function () {
    var checkbox = document.getElementById("check_ed_2");
    checkbox.checked = !checkbox.checked;
  });

// pincodejs

// headeSearchDiv
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// tabbar
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab")[0].style.backgroundColor = "#33333";

function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.backgroundColor = "#33333"; // Reset background color of all tabs
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#33333"; // Set background color of selected tab
}

// tabbarmobile
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
