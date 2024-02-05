// scrollable tabs work
const productTabBox = document.querySelector(".product_menu_item_tab"),
  productArrowIcons = document.querySelectorAll(".product_tab_arrow_icon i");

productArrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    productTabBox.scrollLeft += icon.id === "left" ? -200 : 200;
  });
});

let isDraggingProduct = false;
const productDragging = (e) => {
  if (!isDraggingProduct) return;
  productTabBox.classList.add("productDragging");
  productTabBox.scrollLeft -= e.movementX;
};

const productDragStop = () => {
  productTabBox.classList.remove("productDragging");
  isDraggingProduct = false;
};

productTabBox.addEventListener("mousedown", () => (isDraggingProduct = true));
productTabBox.addEventListener("mousemove", productDragging);
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