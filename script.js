var navbar = null;

// Init function once the window has loaded;
function init() {
  // Find the navbar one page load
  navbar = document.getElementById("navbar");
}

function changeSlide(direction) {
  // Find the container and the active slide
  const container = document.getElementById("projects-container");
  const activeSlide = container.querySelector(".active");

  // Change slide back or forward
  if (direction === "forward") {
    // Change the active slide to the next project
    if (activeSlide.nextElementSibling) {
      activeSlide.nextElementSibling.classList.add("active");
      activeSlide.classList.remove("active");
    } else {
      // Loop back if there is no next slide
      activeSlide.classList.remove("active");
      container.children[0].classList.add("active");
    }
  } else {
    if (activeSlide.previousElementSibling) {
      activeSlide.previousElementSibling.classList.add("active");
      activeSlide.classList.remove("active");
    } else {
      activeSlide.classList.remove("active");
      container.children[container.children.length - 1].classList.add("active");
    }
  }
}

window.onload = init();
window.onscroll = () => {
  // Give the navbar a background when scrolling past a given Y positioni
  if (navbar !== null) {
    if (window.scrollY >= 65) {
      navbar.classList.add("scrollingActive");
    } else {
      navbar.classList.remove("scrollingActive");
    }
  } else {
    console.error("Cannot find navbar");
  }
};
