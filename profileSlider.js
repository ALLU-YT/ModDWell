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
