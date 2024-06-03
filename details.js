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

// loginpopup
document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("popupBackground").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("popupBackground").style.display = "none";
});

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
  .getElementById("closeBtn_signup")
  .addEventListener("click", function () {
    document.getElementById("popupBackground_signup").style.display = "none";
  });

document
  .getElementById("signinPopupbtn_ui")
  .addEventListener("click", function () {
    document.getElementById("popupBackground").style.display = "block";
  });
// // signinPopupbtn
// document
//   .getElementById("signinPopupbtn")
//   .addEventListener("click", function () {
//     document.getElementsByClassName("popupBackground_ui")[0].style.display =
//       "block";
//   });

// document
//   .getElementById("closeBtn")
//   .addEventListener("click", function () {
//     document.getElementById("popupBackground_signup").style.display = "none";
//   });
//Mobile Signup
// function openNavSignup() {
//   document.getElementById("mySidenavSignUp").style.width = "300px";
// }

// function closeNavSignup() {
//   document.getElementById("mySidenavSignUp").style.width = "0";
// }

// CreateyourAccount for mobile

//addToCartPopup
document
  .getElementById("addToCartPopup")
  .addEventListener("click", function () {
    document.getElementById("addToCartPopupBackground").style.display = "block";
  });

//addToAddtresPopup

// addTo cart view coupon
function viewcoupon() {
  // Get the elements by class name (without the dot)
  const couponElements = document.getElementsByClassName(
    "ProductDetailsCard_2"
  );

  // Iterate over each element and set the height
  for (let i = 0; i < couponElements.length; i++) {
    couponElements[i].style.height = "210px";
  }

  // Get the element by class name (without the dot)
  const noActiveCouponsElements =
    document.getElementsByClassName("NoActiveCoupons");

  // Check if there are elements with the class name "NoActiveCoupons"
  if (noActiveCouponsElements.length > 0) {
    // Set the display style to block for the first element found
    noActiveCouponsElements[0].style.display = "block";
  }
}

// scroll
