const navToggleBtn = document.querySelector(".nav_toggle_btn");
const navItems = document.querySelector(".nav_items");

navToggleBtn.addEventListener("click", (e) => {
  let navToggleIcon = navToggleBtn.querySelector("i");

  if (navToggleIcon.classList[1] === "fa-bars-staggered") {
    navToggleIcon.classList = "fa-solid fa-xmark";
  } else {
    navToggleIcon.classList = "fa-solid fa-bars-staggered";
  }

  navItems.classList.toggle("active");
});

// bact to top
mybutton = document.getElementById("bt-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
    mybutton.style.zIndex = 100;
  } else {
    mybutton.style.display = "none";
  }
}
