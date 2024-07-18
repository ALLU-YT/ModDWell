function openNavv() {
  document.getElementById("mySidenavv").style.width = "300px";
  document.body.style.overflow = "hidden"; // Disable scrolling
}

function closeNavv() {
  console.log("Closing sidenav"); // Debugging log
  var sidenav = document.getElementById("mySidenavv");
  if (sidenav) {
    sidenav.style.width = "0";
    // Optionally, you can add a transition duration here
    sidenav.style.transition = "width 0.5s ease"; // Adjust timing as needed
  }
  document.body.style.overflow = ""; // Enable scrolling
}

function wishlistPage() {
  // Function to handle wishlist page redirection
  alert("Redirect to wishlist page");
}

function wishlistPage() {
  // Function to handle wishlist page redirection
  alert("Redirect to wishlist page");
}
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

function homePage() {
  window.location.href = "index.html";
}

function addtoCart() {
  window.location.href = "addToCartPage.html";
}
// Get the modal
var modall = document.getElementById("myModal");

// Get the button that opens the modal
var btnn = document.getElementById("addTicketBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btnn.onclick = function () {
  modall.style.display = "block";
  document.body.classList.add("modal-open");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modall.style.display = "none";
  document.body.classList.remove("modal-open");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modall) {
    modall.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};
document.getElementById("defaultOpen").click(); // Simulate click on the default tab on page load

function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  // Remove 'active' class from all tabs
  var tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
    tabLinks[i].style.backgroundColor = "#333333"; // Set background color of all tabs to default
  }
  // Add 'active' class to the clicked tab
  evt.currentTarget.classList.add("active");
  evt.currentTarget.style.backgroundColor = "white"; // Set background color of selected tab to white
}
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUpBg").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUPSignUp").style.display = "block";
  });
document
  .getElementById("signinPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUPSignUp").style.display = "none";
  });

// SignUpPopup button
document
  .getElementById("signupPopupbtn")
  .addEventListener("click", function () {
    document.getElementById("popUpBg").style.display = "block";
  });

var modal = document.getElementById("myModal_m");

// Get the button that opens the modal
var btn = document.getElementById("newPopup");

var span = document.getElementsByClassName("close_m")[0];
var span_2 = document.getElementsByClassName("close_signUp")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open_m");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open_m");
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
    document.body.classList.remove("modal-open_m");
  }
};
// footer tab
function toggleListt(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "none" || list.style.display === "") {
    // Check for both 'none' and '' (initial)
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function categoryPage() {
  window.location.href = "categorypage.html";
}

function goTomobileImageCardshtml() {
  window.location.href = "mobileImageCards.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const indicatorWrapper = document.getElementById("indicator-wrapper");

  let isDown = false;
  let startX;
  let scrollLeft;

  gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    gallery.classList.add("active");
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
    e.preventDefault();
  });

  gallery.addEventListener("mouseleave", () => {
    isDown = false;
    gallery.classList.remove("active");
  });

  gallery.addEventListener("mouseup", () => {
    isDown = false;
    gallery.classList.remove("active");
  });

  gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    gallery.scrollLeft = scrollLeft - walk;
    updateIndicators();
  });

  gallery.addEventListener("scroll", updateIndicators);

  function updateIndicators() {
    const totalWidth = gallery.scrollWidth;
    const visibleWidth = gallery.clientWidth;
    const currentScroll = gallery.scrollLeft;
    const numIndicators = Math.ceil(totalWidth / visibleWidth);

    indicatorWrapper.innerHTML = "";

    for (let i = 0; i < numIndicators; i++) {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      if (
        currentScroll >= i * visibleWidth &&
        currentScroll < (i + 1) * visibleWidth
      ) {
        indicator.classList.add("active");
      }
      indicatorWrapper.appendChild(indicator);
    }
  }

  updateIndicators();
});
function navToPage() {
  window.location.href = "ShippingInfo.html";
}
function OpenAddToCartPage() {
  window.location.href = "mobileCouponPage.html";
}
function openhomepage() {
  window.location.href = "index.html";
}
function WishlistPage() {
  window.location.href = "mobileWishListPage.html";
}
function OrderPage() {
  window.location.href = "MobilePurchaseHistory.html";
}
function toggleList(listId) {
  var list = document.getElementById(listId);
  if (list.style.display === "none" || list.style.display === "") {
    // Check for both 'none' and '' (initial)
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
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
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".scrollable-content");
  let lastScrollTop = 0;

  container.addEventListener("scroll", function () {
    const st = container.scrollTop;
    if (
      st > lastScrollTop &&
      container.scrollHeight - container.scrollTop === container.clientHeight
    ) {
      // Scrolling down and at the bottom of the container
      window.scrollBy({
        top: 100, // Adjust this value as needed
        behavior: "smooth",
      });
    } else if (st < lastScrollTop && container.scrollTop === 0) {
      // Scrolling up and at the top of the container
      window.scrollBy({
        top: -100, // Adjust this value as needed
        behavior: "smooth",
      });
    }
    lastScrollTop = st;
  });
});
function ShippingPage() {
  window.location.href = "checkOut.html";
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
