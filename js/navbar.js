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


//slider tab JS
/*
const wrapper_tabs_box = document.querySelector(".wrapper_tabs_box");
allwrapper_tabs_box = document.querySelectorAll(".tab_btn"),
arrowIcons = document.querySelectorAll(".wrapper_slider_icon i");
const institutionGalleryTabConetent = document.querySelectorAll(".institution_gallery_wrapper");

let isDragging = false;

const handleIcons =() => {
  let scrollVal = Math.round(wrapper_tabs_box.scrollLeft);
  let maxScrollableWidth = wrapper_tabs_box.scrollWidth - wrapper_tabs_box.clientWidth ;
  arrowIcons [0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons [1].parentElement.style.display =  maxScrollableWidth> scrollVal  ? "flex" : "none";
}




arrowIcons.forEach(wrapper_slider_icon => {
  wrapper_slider_icon.addEventListener ("click", () => {
    wrapper_tabs_box.scrollLeft += wrapper_slider_icon.id === "left" ? -350 : 350;
   setTimeout(() => handleIcons(), 50) //calling handleIcon after 50 millseconds
  })

})


const dragging = (e) => {
  if(!isDragging) return;
  wrapper_tabs_box.classList.add("dragging");
  wrapper_tabs_box.scrollLeft -= e.movementX;
  handleIcons();
}

const dragStop = () => {
  isDragging = false;
  wrapper_tabs_box.classList.remove("dragging");
}

wrapper_tabs_box.addEventListener("mousedown",  () => isDragging = true);
wrapper_tabs_box.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

allwrapper_tabs_box.forEach((tab_btn, index) => {
  tab_btn.addEventListener ("click", () => {
    wrapper_tabs_box.querySelector(".active").classList.remove("active");
    tab_btn.classList.add("active");
  })

  institutionGalleryTabConetent.forEach((content) => content.classList.remove("active"));
    institutionGalleryTabConetent[index].classList.add("active");

})
*/

// scrollable tabs work
const wrapper_tabs_box = document.querySelector(".product_menu_item_tab"),
arrowIcons = document.querySelectorAll(".product_tab_arrow_icon i");

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    wrapper_tabs_box.scrollLeft += icon.id === "left" ? -200 : 200;
  });
});

let isDraggingProduct = false;
const productDragging = (e) => {
  if (!isDraggingProduct) return;
  wrapper_tabs_box.classList.add("dragging");
  wrapper_tabs_box.scrollLeft -= e.movementX;
};

const productDragStop = () => {
  wrapper_tabs_box.classList.remove("dragging");
  isDraggingProduct = false;
};

wrapper_tabs_box.addEventListener("mousedown", () => (isDraggingProduct = true));
wrapper_tabs_box.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", productDragStop);

// product menu tabs content work
const productTabBtn = document.querySelectorAll(".product_menu_tab_btn");
const productTabContent = document.querySelectorAll(
  ".product_menu_tab_content"
);

productTabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    productTabBtn.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    productTabContent.forEach((content) => content.classList.remove("active"));
    productTabContent[index].classList.add("active");
  });
});