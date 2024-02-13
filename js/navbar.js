////const navToggleBtn = document.querySelector(".nav_toggle_btn");
//const navItems = document.querySelector(".nav_items");

//navToggleBtn.addEventListener("click", (e) => {
 // let navToggleIcon = navToggleBtn.querySelector("i");

 // if (navToggleIcon.classList[1] === "fa-bars-staggered") {
  //  navToggleIcon.classList = "fa-solid fa-xmark";
  //} else {
  //  navToggleIcon.classList = "fa-solid fa-bars-staggered";
 // }

 // navItems.classList.toggle("active");
//});

// bact to top
//mybutton = document.getElementById("bt-top");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function () {
  ////scrollFunction();
//};

//function scrollFunction() {
  //if (
   // document.body.scrollTop > 1000 ||
   /// document.documentElement.scrollTop > 1000
 // ) {
   // mybutton.style.display = "block";
   // mybutton.style.zIndex = 100;//
 // } else {
   // mybutton.style.display = "none";
 // }
//}





const menu = document.querySelector (".menu");
const menuMain = menu.querySelector (".menu_main");
const closeMenu = menu.querySelector (".mobile_menu_closed");
const menuTrigger = document.querySelector (".mobile_menu_trigger");
const goBack = menu.querySelector (".go-back");
let subMenu;
menuMain.addEventListener("click", (e) => {
    if(!menu.classList.contains("active")) {
return;
    }
if(e.target.closest(".menu_item_has_children")){
    const hasChildren = e.target.closest(".menu_item_has_children");
    showSubMenu(hasChildren)
}
});

goBack.addEventListener("click",() =>{
    hideSubMenu();
} )

menuTrigger.addEventListener("click",() =>{
    toggleMenu();
} )


closeMenu.addEventListener("click",() =>{
    toggleMenu();
} )
document.querySelector(".menu_overlay").addEventListener("click",() => {
    toggleMenu();
})
function toggleMenu(){
menu.classList.toggle("active");
document.querySelector(".menu_overlay").classList.toggle("active");
}

function showSubMenu(hasChildren){
subMenu = hasChildren.querySelector(".sub_menu");
subMenu.classList.add("active");
subMenu.style.animation = "slideLeft 0.5s ease forwards";
const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
menu.querySelector(".current_menu_title").innerHTML=menuTitle;
menu.querySelector(".mobile_menu_heading").classList.add("active");
}

function  hideSubMenu() {
subMenu.style.animation = "slideRight 0.5s ease forwards";
setTimeout(() =>{
    subMenu.classList.remove("active");
},300);
menu.querySelector(".current_menu_title").innerHTML="";
menu.querySelector(".mobile_menu_heading").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth > 991) {
        if(menu.classList.contains("active")) {
            toggleMenu();
        }
      
    }
}